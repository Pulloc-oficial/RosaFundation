import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  server: {
      host: '0.0.0.0', // Permite acceso desde cualquier IP
      port: 5173, // Cambia el puerto si es necesario
      strictPort: true, // Usa siempre el mismo puerto
      hmr: {
        clientPort: 443, // Requerido para ngrok en HTTPS
      },
      allowedHosts: ['.ngrok-free.app'],
    },
})
