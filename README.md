# Yoga in Celerina

A static Astro website with separate German and English routes. German is the default language, and `/` redirects to `/de/`.

## Development

Use the Node version in `.nvmrc` and pnpm:

```sh
nvm use
pnpm install
pnpm dev
```

Run `pnpm build` to generate the static site in `dist/`. Use `pnpm preview` to inspect the build locally.
