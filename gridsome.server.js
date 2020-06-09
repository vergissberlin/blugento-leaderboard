// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const MD5 = require('crypto-js/md5')

const gravatar = function(email, size = 200) {
	return `https://www.gravatar.com/avatar/${MD5(email)}?s=${size}&d=robohash&r=x`
}

const shorten = function(value) {
	if (!value) return ''
	value = value.toString()
	return `${value.charAt(0)}.`
}

const level = function(scores) {
	switch (true) {
		case scores > 10 && scores < 12:
			return 1
		case scores >= 12 && scores < 144:
			return 2
		case scores >= 144 && scores < 512:
			return 3
		case scores >= 512 && scores < 1024:
			return 4
		case scores >= 1024 && scores < 2048:
			return 5
		case scores >= 2048 && scores < 4096:
			return 6
		case scores >= 4096:
			return 7
		default:
			return 0
	}
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

		for (const user of data.contacts) {
			const scores = user.custom_fields.find((x) => x.kind === 'beta - scores').value
			collection.addNode({
				name: `${user.FirstName} ${shorten(user.LastName)}`,
				gravatar: gravatar(user.Email),
				scores: scores,
				level: level(scores)
			})
		}
	})

	// API
	api.configureServer((app) => {
		app.get('/leader', (_req, res) => {
			res.send('Hello, world!')
		})
	})
}
