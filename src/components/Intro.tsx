"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

/* ---------- context: lets reveal animations wait for the intro ---------- */

const IntroContext = createContext(true);
export const useIntroReady = () => useContext(IntroContext);

const DURATION = 2.6; // seconds for the blob to cover the whole screen
const READY_AT = 0.9; // seconds in when page content may start revealing
const OVERLAY = [0.02, 0.02, 0.02] as const;

/* ---------- shaders ---------- */

const VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uP;      // progress 0..1
uniform float uT;      // time (s)
uniform vec3 uColor;   // overlay colour

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main(){
  float s = min(uRes.x, uRes.y);
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / s;

  // organic, slowly boiling distance field
  float n = fbm(uv * 2.4 + vec2(uT * 0.35, -uT * 0.25));
  float wobble = (n - 0.5) * 0.7 * smoothstep(0.0, 0.3, uP);
  float d = length(uv) + wobble;

  float maxR = 0.5 * length(uRes) / s + 0.7;
  float m = d - maxR * uP;            // > 0 : still covered, < 0 : revealed

  float ov = smoothstep(-0.004, 0.006, m);  // overlay opacity

  // colourless soft white glow along the edge (no chromatic split)
  float w = 0.10;      // glow width
  float g1 = smoothstep(-w, 0.0, m) * (1.0 - smoothstep(0.0, 0.025, m));
  vec3 g = vec3(g1);
  vec3 edge = vec3(0.92) * g * 0.9;

  vec3 rgb = uColor * ov + edge;
  float a = clamp(ov + max(g.r, max(g.g, g.b)), 0.0, 1.0);
  gl_FragColor = vec4(min(rgb, vec3(a)), a);   // premultiplied
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
  return sh;
}

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* ---------- component ---------- */

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => {
        setReady(true);
        setGone(true);
      }, 0);
      return () => clearTimeout(t);
    }

    const el = canvas.current;
    const box = overlay.current;
    let raf = 0;
    let readyTimer = 0;
    let gl: WebGLRenderingContext | null = null;

    const finish = () => {
      setReady(true);
      setGone(true);
    };

    try {
      gl = el!.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false });
      if (!gl) throw new Error("no webgl");

      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      const uRes = gl.getUniformLocation(prog, "uRes");
      const uP = gl.getUniformLocation(prog, "uP");
      const uT = gl.getUniformLocation(prog, "uT");
      gl.uniform3f(gl.getUniformLocation(prog, "uColor"), ...OVERLAY);

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const resize = () => {
        el!.width = Math.round(window.innerWidth * dpr);
        el!.height = Math.round(window.innerHeight * dpr);
        gl!.viewport(0, 0, el!.width, el!.height);
        gl!.uniform2f(uRes, el!.width, el!.height);
      };
      resize();
      window.addEventListener("resize", resize);

      const start = performance.now();
      let first = true;
      const frame = (now: number) => {
        const t = (now - start) / 1000;
        const p = easeInOutCubic(Math.min(t / DURATION, 1));
        gl!.uniform1f(uP, p);
        gl!.uniform1f(uT, t);
        gl!.drawArrays(gl!.TRIANGLES, 0, 3);
        if (first) {
          first = false;
          if (box) box.style.background = "transparent"; // canvas now draws the cover
        }
        if (t < DURATION) raf = requestAnimationFrame(frame);
        else finish();
      };
      raf = requestAnimationFrame(frame);
      readyTimer = window.setTimeout(() => setReady(true), READY_AT * 1000);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(readyTimer);
        window.removeEventListener("resize", resize);
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      };
    } catch {
      // No WebGL: simple fade-out fallback
      if (box) {
        box.style.transition = "opacity 0.8s ease";
        requestAnimationFrame(() => (box.style.opacity = "0"));
      }
      setReady(true);
      const t = window.setTimeout(() => setGone(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <IntroContext.Provider value={ready}>
      {!gone && (
        <div
          ref={overlay}
          id="intro"
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[100]"
          style={{ background: `rgb(${OVERLAY.map((c) => Math.round(c * 255)).join(",")})` }}
        >
          <canvas ref={canvas} className="block h-full w-full" />
        </div>
      )}
      <noscript>
        <style>{`#intro{display:none!important}`}</style>
      </noscript>
      {children}
    </IntroContext.Provider>
  );
}
