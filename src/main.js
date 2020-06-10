// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '/layouts/Default.vue'
import '/assets/scss/styles.scss'
const appConfig = require('../app.config')

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;700&display=swap'
	})

	// Keywords
	head.meta.push({
		name: 'keywords',
		content: appConfig.meta.keywords
	})
	head.meta.push({
		name: 'author',
		content: 'André Lademann, vergissberlin@googlemail.com'
	})
	head.meta.push({
		name: 'robots',
		content: 'noindex,nofollow'
	})

	// OpenGraph
	// @see https://opengraphcheck.com/result.php?url=https%3A%2F%2Fblugento-leaderboard.netlify.app%2F#.Xt6j52ozY9g
	head.meta.push({
		property: 'og:title',
		content: appConfig.name
	})
	head.meta.push({
		property: 'og:description',
		content: appConfig.meta.description
	})
	head.meta.push({
		property: 'og:type',
		content: 'website'
	})
	head.meta.push({
		property: 'og:image:url',
		content: `https://blugento-leaderboard.netlify.app/assets/img/opengraph.jpg`
	})
	head.meta.push({
		property: 'og:image:width',
		content: '1200'
	})
	head.meta.push({
		property: 'og:image:height',
		content: '630'
	})

	head.meta.push({
		property: 'og:image:alt',
		content: appConfig.meta.description
	})

	// Twitter
	// @see https://cards-dev.twitter.com/validator
	head.meta.push({
		name: 'twitter:card',
		content: 'summary_large_image'
	})
	head.meta.push({
		name: 'twitter:site',
		content: '@vergissverlin'
	})
	head.meta.push({
		name: 'twitter:title',
		content: appConfig.name
	})
	head.meta.push({
		name: 'twitter:description',
		content: appConfig.meta.description
	})
	head.meta.push({
		name: 'twitter:image',
		content: 'https://blugento-leaderboard.netlify.app/assets/img/twitter.jpg'
	})
	head.meta.push({
		name: 'twitter:image:alt',
		content: appConfig.meta.description
	})

	// Splash screen
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/touchicon.png'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphone5_splash.png',
		media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphone6_splash.png',
		media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphoneplus_splash.png',
		media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphonex_splash.png',
		media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphonexr_splash.png',
		media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/iphonexsmax_splash.png',
		media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/ipad_splash.png',
		media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/ipadpro1_splash.png',
		media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/ipadpro3_splash.png',
		media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
	})
	head.link.push({
		rel: 'apple-touch-startup-image',
		href: '/assets/img/splash/ipadpro2_splash.png',
		media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
	})
}
