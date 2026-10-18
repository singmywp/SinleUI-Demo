import App from './App.uvue'

import { createSSRApp } from 'vue'
import { i18n } from './i18n.ts'
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {
		app
	}
}