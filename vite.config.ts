/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    test: {
        globals: false,
        environment: "jsdom",
    },
    preview: {
        allowedHosts: ["mika.lehre.hwr-berlin.de"],
    },
    server: {
        allowedHosts: ["mika.lehre.hwr-berlin.de"],
    },
});
