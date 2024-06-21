import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SOCIETIES, checkForSocErrors } from './src/data/societies'

// Check for society errors
// TODO: There is probably a better way of doing this.
try {
  checkForSocErrors(SOCIETIES);
} catch (e) {
  console.log(`Society data invalid.`);
  console.error(e);
  process.exit(1);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
