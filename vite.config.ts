import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update `base` to '/<your-repo-name>/' if deploying under a subpath on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/', // e.g., '/abdallah-portfolio/'
})