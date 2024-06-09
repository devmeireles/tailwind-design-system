import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: [
        "**/test/**",
        "setupAfterEnv.ts",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "./src/utils/**",
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
      name: "tailwind-design-system",
    },
  },
});
