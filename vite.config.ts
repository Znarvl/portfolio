/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react({ fastRefresh: false })], // If not fastRefresh is false, testing wont work, a TODO is to find a better workaround
  worker: {
    plugins: [react()],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    css:true
   },
})
