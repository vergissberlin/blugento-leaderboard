// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const appName = 'blugento leaderboard',
	appNameShort = 'leaderboard',
	appUrl = 'https://blugento-leaderboard.netlify.app',
	appDescription = 'leaderboard for winners!',
	appIconFav = './src/assets/img/favicon.png',
	appIconTouch = './src/assets/img/touchicon.png',
	appIconMsTile = './src/assets/img/touchicon-144.jpg',
	appColourPrimary = '#006eb8',
	appColourSecondary = '#f18626'

module.exports = {
	siteName: appName,
	siteDescription: appDescription,
	siteUrl: appUrl,
	icon: {
		favicon: appIconFav,
		touchicon: appIconTouch
	},
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noindex', 'noopener', 'noreferrer']
		}
	},
	plugins: [
		{
			use: 'gridsome-plugin-brotli'
		},
		{
			use: 'gridsome-plugin-typescript'
		},
		{
			use: 'gridsome-plugin-pwa',
			options: {
				title: appName,
				shortName: appNameShort,
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'black-translucent',
				manifestPath: 'manifest.json',
				disableServiceWorker: false,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
				themeColor: appColourPrimary,
				backgroundColor: appColourPrimary,
				icon: appIconFav,
				icon_path: appIconTouch,
				lang: 'en'
			}
		}
	]
}
