// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'blugento leaderboard',
	siteDescription: 'leaderboard for winners!',
	siteUrl: 'https://blugento-leaderboard.netlify.app/surge.sh',
	icon: {
		favicon: './src/assets/img/favicon.png',
		touchicon: './src/assets/img/touchicon.png'
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
			use: 'gridsome-plugin-service-worker',
			options: {
				networkFirst: {
					precachedRoutes: ['/'],
					cacheName: 'lb-v1',
					routes: ['/', /\.(js|css|png)$/]
				}
			}
		},
		{
			use: 'gridsome-plugin-manifest',
			options: {
				background_color: '#006eb8',
				icon_path: './src/assets/img/touchicon.jpg',
				name: 'blugento leaderboard',
				short_name: 'leaderboard',
				display: 'standalone',
				theme_color: '#f18626',
				start_url: '/index.html',
				lang: 'en'
			}
		}
	]
}
