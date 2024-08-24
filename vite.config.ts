import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react({
         babel: {
            parserOpts: {
               plugins: ["decorators-legacy"],
            },
         },
      }),
      visualizer() as PluginOption,
      ViteImageOptimizer({
         png: {
            quality: 60,
         },
         jpeg: {
            quality: 60,
         },
         jpg: {
            quality: 60,
         },
      }),
   ],
   server: {
      port: 3000,
      host: true,
      strictPort: true,
   },
   // @ts-ignore-next-line
   base: import.meta.BASE_PATH,
   resolve: {
      alias: {
         "@src": path.resolve(__dirname, "./src"),
         "@pages": path.resolve(__dirname, "./src/pages"),
         "@shared": path.resolve(__dirname, "./src/shared"),
         "@widgets": path.resolve(__dirname, "./src/widgets"),
         "@entities": path.resolve(__dirname, "./src/entities"),
         "@features": path.resolve(__dirname, "./src/features"),
         "@providers": path.resolve(__dirname, "./src/app/providers"),
         "@styles": path.resolve(__dirname, "./src/app/styles"),
      },
   },
   build: {
      rollupOptions: {
         output: {
            manualChunks: {
               "react-venders": ["react", "react-dom"],
            },
         },
      },
   },
});
