import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Live site: https://itsprithv.github.io/PruthviRajpk/
const repoName = 'PruthviRajpk'
const isCi = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isCi ? `/${repoName}/` : '/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
})
