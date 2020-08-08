/** @format */
const API = require('animeflv-scrapper')
module.exports = {
	getAllAnime: async (req, res) => {
		// res.io.emit('Hello', 'Hello World')
		// res.json('Hello World')

		// All anime
		API.getAllAnimes()
			.then((data) => {
				res.json(data)
			})
			.catch((error) => {
				res.json(error)
			})
	},
}
