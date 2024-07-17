import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://scio12.netlify.app",
  integrations: [react(), robotsTxt(), sitemap(), tailwind(), icon()],
});
