import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mpa from '../../src/index'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mpa()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
})
