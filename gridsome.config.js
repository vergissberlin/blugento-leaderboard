// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'blugento leaderboard',
	siteDescription: 'leaderboard for winners!',
	siteUrl: 'https://blugentoleaderboard.surge.sh',
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
			use: '@gridsome/plugin-critical',
			options: {
				paths: ['/'],
				width: 1300,
				height: 900
			}
		},
		{
			use: 'gridsome-plugin-manifest',
			options: {
				background_color: '#006eb8',
				icon_path: './src/assets/img/trophy.jpg',
				name: 'blugento leaderboard',
				short_name: 'leader',
				display: 'standalone',
				theme_color: '#f18626',
				start_url: '/index.html',
				lang: 'en'
			}
		}
	]
}
