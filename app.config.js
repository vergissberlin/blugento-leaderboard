// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	name: 'blugento leaderboard',
	nameShort: 'leaderboard',
	url: 'https://blugento-leaderboard.netlify.app',
	meta: {
		keywords: 'blugento,leader,leaderboard,winner',
		description:
			'Blugento is a great application for managing dockerized websites. Every week I award the most active users.'
	},
	icon: {
		fav: './src/assets/img/favicon.png',
		touch: './src/assets/img/touchicon.png',
		svg: {
			fav: './src/assets/img/favicon.svg',
			touch: './src/assets/img/touchicon.svg'
		}
	},
	colour: {
		primary: '#006eb8',
		secondary: '#f18626'
	}
}
