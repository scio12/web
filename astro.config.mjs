import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://scio12.vercel.app",
  vite: {
    ssr: {
      noExternal: ["picnic"]
    }
  },
  integrations: [image(), react(), robotsTxt(), sitemap()]
});
