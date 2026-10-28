// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force-enable the Nitro deploy plugin with Cloudflare Workers as the target.
  // Outside of Lovable's sandbox the plugin is skipped by default, which means
  // `vite build` produces no .output/server bundle and no wrangler config for
  // Cloudflare deployment. Passing `nitro: true` restores that behavior.
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      // Generates .output/server/wrangler.json with nodejs_compat + assets binding.
      deployConfig: true,
      nodeCompat: true,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force the nitro deploy plugin even outside the Lovable sandbox (e.g. Cloudflare Pages CI).
  nitro: {
    preset: "cloudflare-pages",
  },
});
