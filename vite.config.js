import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'resolve-scheduler',
          resolveId(id) {
            if (id === './cjs/scheduler.production.js' || id === '../../cjs/scheduler.production.js') {
              return { id: '/home/user/app/node_modules/scheduler/cjs/scheduler.development.js' };
            }
            return null;
          },
        },
      ],
    },
  },
})
