// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://aszxqaz.github.io",
  base: "/fm-loopstudios-landing-page",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
