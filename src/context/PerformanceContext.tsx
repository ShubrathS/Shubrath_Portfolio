import { createContext, useContext, useEffect, useState, PropsWithChildren } from "react";

export type QualityLevel = "high" | "medium" | "low";

interface PerformanceContextType {
  quality: QualityLevel;
  isMobile: boolean;
  sphereCount: number;
  particleCount: number;
  enablePostProcessing: boolean;
  enableParticles: boolean;
  enableMouseEffects: boolean;
  pixelRatio: number;
}

const defaults: Record<QualityLevel, Omit<PerformanceContextType, "quality" | "isMobile">> = {
  high: {
    sphereCount: 30,
    particleCount: 120,
    enablePostProcessing: true,
    enableParticles: true,
    enableMouseEffects: true,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  },
  medium: {
    sphereCount: 18,
    particleCount: 70,
    enablePostProcessing: true,
    enableParticles: true,
    enableMouseEffects: true,
    pixelRatio: Math.min(window.devicePixelRatio, 1.5),
  },
  low: {
    sphereCount: 10,
    particleCount: 40,
    enablePostProcessing: false,
    enableParticles: true,
    enableMouseEffects: false,
    pixelRatio: 1,
  },
};

function detectQuality(): QualityLevel {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (!gl) return "low";

  const glCtx = gl as WebGLRenderingContext;
  const debugInfo = glCtx.getExtension("WEBGL_debug_renderer_info");
  const renderer = debugInfo
    ? glCtx.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()
    : "";

  // Check for integrated/weak GPUs
  const isWeakGPU =
    /intel|mesa|swiftshader|llvmpipe|microsoft basic/i.test(renderer) ||
    /uhd\s*(6[0-3]\d|5\d\d|4\d\d)/i.test(renderer);

  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;

  // Check device memory (Chrome only)
  const memory = (navigator as any).deviceMemory || 4;

  const isMobile = window.innerWidth <= 1024 || /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile || (isWeakGPU && cores <= 4) || memory <= 2) {
    return "low";
  }

  if (isWeakGPU || cores <= 4 || memory <= 4) {
    return "medium";
  }

  return "high";
}

const PerformanceContext = createContext<PerformanceContextType | null>(null);

export const PerformanceProvider = ({ children }: PropsWithChildren) => {
  const [quality, setQuality] = useState<QualityLevel>("medium");
  const isMobile = window.innerWidth <= 1024;

  useEffect(() => {
    const detected = detectQuality();
    setQuality(detected);
    document.documentElement.setAttribute("data-quality", detected);
  }, []);

  const value: PerformanceContextType = {
    quality,
    isMobile,
    ...defaults[quality],
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const ctx = useContext(PerformanceContext);
  if (!ctx) throw new Error("usePerformance must be used within PerformanceProvider");
  return ctx;
};
