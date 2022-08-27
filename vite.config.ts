/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

/// <reference types="vite/client" />
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
