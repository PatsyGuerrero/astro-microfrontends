# astro-microfrontends

This demo takes advantage of EcmaScript Modules (ESM) and url-imports to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.

## Features

- ✨ Client-side composition of microfrontends
- 📦 Multiframeworks with Astro Islands
- 🚀 SSG/SSR supported by Astro

## Usage

### Micro frontends

#### Node server

- Build each micro frontend with `npm run build`
- Navigate to server folder `cd server`
- Start each micro frontend with `node server.js`

#### Vite preview

- Build each micro frontend with `npm run build`
- Start each micro frontend with `npm run preview`

### Shell

- Build the shell with `npm run build`
- Start the shell with `npm run preview`

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and gets cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.
