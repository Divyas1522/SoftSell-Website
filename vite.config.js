import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Custom utility function to remove the scrollbar
    function () {
      return {
        name: 'vite-plugin-no-scrollbar',
        config() {
          return {
            css: {
              preprocessorOptions: {
                css: {
                  additionalData: `
                    .no-scrollbar {
                      scrollbar-width: none;
                      &::-webkit-scrollbar {
                        display: none;
                      }
                    }
                  `,
                },
              },
            },
          };
        },
      };
    },
  ],
});
