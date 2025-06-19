import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      generatedRouteTree: './src/routeTree.gen.ts'
    }),
    react(),
  ],
  server: {
    port: 3000,
    open: true,
  },
})