// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Using react-swc as in your original code
import path from "path"; // Added the path import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Keeping react-swc plugin from your original code
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Added alias configuration
    },
  },
});
