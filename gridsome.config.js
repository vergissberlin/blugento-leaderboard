// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const appConfig = require('./app.config')

module.exports = {
	siteName: appConfig.name,
	siteDescription: appConfig.meta.description,
	siteUrl: appConfig.url,
	titleTemplate: appConfig.name,
	icon: {
		favicon: appConfig.icon.fav,
		touchicon: appConfig.icon.touch
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
				title: appConfig.name,
				shortName: appConfig.nameShort,
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'black-translucent',
				manifestPath: 'manifest.json',
				disableServiceWorker: false,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
				themeColor: appConfig.colour.primary,
				backgroundColor: appConfig.colour.primary,
				icon: appConfig.icon.touch,
				icon_path: appConfig.icon.touch,
				svgFavicon: appConfig.icon.svg.fav,
				msTileColor: appConfig.colour.primary,
				appleMaskIcon: appConfig.icon.touch,
				appleMaskIconColor: appConfig.colour.primary,
				maskableIcon: true,
				lang: 'en-GB',
				dir: 'auto'
			}
		}
	]
}
