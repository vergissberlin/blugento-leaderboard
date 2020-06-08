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
		content: 'article'
	})
	head.meta.push({
		property: 'og:image:secure_url',
		content: `https://blugento-leaderboard.netlify.app/assets/img/opengraph.jpg`
	})
	head.meta.push({
		property: 'og:image:alt',
		content: appConfig.meta.description
	})
	head.meta.push({
		property: 'og:image:width',
		content: '1200'
	})
	head.meta.push({
		property: 'og:image:height',
		content: '630'
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
		content: appConfig.description
	})
}
