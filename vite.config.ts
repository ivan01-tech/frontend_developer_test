/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    testMatch: ["./src/test/**/*.test.tsx", "./src/test/**/*.test.ts"],
  },
}));
