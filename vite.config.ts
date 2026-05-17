import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Loops over /public + import-graph assets after build and rewrites
      // them in-place with smaller versions (same format, no rename).
      png: {
        quality: 80,
        compressionLevel: 9,
        palette: true,
        effort: 10,
      },
      jpeg: { quality: 80, mozjpeg: true },
      jpg: { quality: 80, mozjpeg: true },
      webp: { quality: 75, effort: 6 },
      avif: { quality: 60 },
      svg: {
        multipass: true,
        plugins: ["preset-default", "removeDimensions"],
      },
      // Skip the 3D model textures – Three.js is sensitive to colour shifts
      exclude: /char_enviorment\.hdr$|model\.glb$/,
      logStats: true,
    }),
  ],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("three") || id.includes("@react-three"))
            return "three-vendor";
          if (id.includes("gsap")) return "gsap-vendor";
          if (id.includes("react-icons")) return "icons-vendor";
          if (id.includes("react-fast-marquee")) return "marquee-vendor";
          if (id.includes("@vercel")) return "vercel-vendor";
          if (id.includes("react") || id.includes("scheduler"))
            return "react-vendor";
        },
      },
    },
  },
});
