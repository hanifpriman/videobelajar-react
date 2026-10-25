import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// konfigurasi vite, cukup pakai plugin react default
export default defineConfig({
  plugins: [react()],
});
