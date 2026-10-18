import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import zhHans from './locale/zh-Hans.json'
import en from './locale/en.json'
import zhHant from './locale/zh-Hant.json'

const APP_LOCALE_KEY = 'app_locale'
const SUPPORTED_APP_LOCALES: string[] = ['zh-Hans', 'zh-Hant', 'en']
const DEFAULT_APP_LOCALE = 'zh-Hans'

function isAppLocaleSupported(code: string): boolean {
	for (let i = 0; i < SUPPORTED_APP_LOCALES.length; i++) {
		if (SUPPORTED_APP_LOCALES[i] == code) {
			return true
		}
	}
	return false
}

function loadAppLocale(): string {
	try {
		const val = uni.getStorageSync(APP_LOCALE_KEY)
		if (val != null && val != '') {
			const code = val as string
			if (isAppLocaleSupported(code)) {
				return code
			}
		}
	} catch (e) {
	}
	return DEFAULT_APP_LOCALE
}

export const i18n = createI18n({
	legacy: false,
	locale: loadAppLocale(),
	fallbackLocale: 'zh-Hans',
	messages: {
		'zh-Hans': zhHans,
		'en': en,
		'zh-Hant': zhHant
	}
})

watch(i18n.global.locale, (val: string): void => {
	try {
		uni.setStorageSync(APP_LOCALE_KEY, val)
	} catch (e) {
	}
})