// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const MD5 = require('crypto-js/md5')

function gravatar(email, size = 200) {
	return `https://www.gravatar.com/avatar/${MD5(email)}?s=${size}&d=robohash&r=x`
}

module.exports = function(api) {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	api.loadSource(async (actions) => {
		const { data } = await axios({
			method: 'get',
			url: `${process.env.SEGMENTS_LIST}`,
			headers: {
				autopilotapikey: process.env.AUTOPILOT_KEY
			}
		})

		const collection = actions.addCollection({
			typeName: 'Users'
		})

		for (const item of data.contacts) {
			collection.addNode({
				id: item.contact_id,
				name: item.Name,
				firstName: item.FirstName,
				lastName: item.LastName,
				salutation: item.Salutation,
				gravatar: gravatar(item.Email),
				scores: item.custom_fields.find((x) => x.kind === 'beta - scores').value
			})
		}
	})

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})

	// API
	api.configureServer((app) => {
		app.get('/leader', (req, res) => {
			res.send('Hello, world!')
		})
	})
}
