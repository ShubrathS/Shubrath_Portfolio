import { createContext, useContext } from "react";

export type QualityLevel = "high" | "medium" | "low";

export interface PerformanceContextType {
  quality: QualityLevel;
  isMobile: boolean;
  sphereCount: number;
  particleCount: number;
  enablePostProcessing: boolean;
  enableParticles: boolean;
  enableMouseEffects: boolean;
  pixelRatio: number;
}

export const PerformanceContext = createContext<PerformanceContextType | null>(
  null
);

export const usePerformance = () => {
  const ctx = useContext(PerformanceContext);
  if (!ctx)
    throw new Error("usePerformance must be used within PerformanceProvider");
  return ctx;
};
