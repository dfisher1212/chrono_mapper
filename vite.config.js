import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'import.meta.env.VITE_CESIUM_ION_ACCESS_TOKEN': JSON.stringify(env.VITE_CESIUM_ION_ACCESS_TOKEN)
    },
    resolve: {
      alias: {
        cesium: path.resolve(__dirname, 'node_modules/cesium')
      }
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]"
        }
      }
    },
    server: {
      fs: {
        allow: ['public', 'node_modules/cesium']
      }
    }
  };
});