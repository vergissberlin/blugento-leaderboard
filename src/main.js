// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.scss'
const appConfig = require('../app.config')

export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	// Keywords
	head.meta.push({
		name: 'keywords',
		content: appConfig.meta.keywords
	})

	// OpenGraph
	head.meta.push({
		name: 'og:title',
		content: appConfig.name
	})
	head.meta.push({
		name: 'og:description',
		content: appConfig.meta.description
	})
	head.meta.push({
		name: 'og:type',
		content: 'article'
	})
	head.meta.push({
		name: 'og:image:secure_url',
		content: `https://blugento-leaderboard.netlify.app/assets/img/opengraph.jpg`
	})
	head.meta.push({
		name: 'og:image:alt',
		content: appConfig.meta.description
	})
	head.meta.push({
		name: 'og:image:width',
		content: '512'
	})
	head.meta.push({
		name: 'og:image:height',
		content: '512'
	})

	// Twitter
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
		content: appConfig.description
	})
}
