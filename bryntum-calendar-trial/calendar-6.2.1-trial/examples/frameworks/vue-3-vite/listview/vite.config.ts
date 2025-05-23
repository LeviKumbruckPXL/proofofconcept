import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins      : [vue()],
    optimizeDeps : {
        include : ['@bryntum/calendar', '@bryntum/calendar-vue-3']
    },
    base  : '',
    build : {
        // Suppress warning for chunk size
        chunkSizeWarningLimit : 10000,

        // Turn warnings into errors
        // https://rollupjs.org/configuration-options/#onlog
        rollupOptions : {
            onLog(level, log, handler) {
                if (level === 'warn') {
                    handler('error', log);
                }
                else {
                    handler(level, log);
                }
            }
        }
    }
});
