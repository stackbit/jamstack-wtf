import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	  integrations: [
      partytown({
        // Adds dataLayer.push as a forwarding-event.
        config: {
          forward: ["dataLayer.push"],
        },
      }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
});
