import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      port: 3000,
   },
   // @ts-ignore-next-line
   base: import.meta.BASE_PATH,
   resolve: {
      alias: {
         // main: path.resolve(__dirname, "index.html"),
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
});
