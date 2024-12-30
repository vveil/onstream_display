import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3030,
	},
	build: {
		// outDir: 'dist',
		// minify: 'esbuild',
		rollupOptions: {
			input: {
				main: 'index.html'
			}
		}
	}
})
