/** @format */
const API = require('animeflv-scrapper')
module.exports = {
	searchAnime: async (req, res) => {
		// res.io.emit('Hello', 'Hello World')
		// res.json('Hello World')
		const { name } = req.body
		// Search Anime
		API.searchAnime(name).then((data) => {
			res.json(data)
		})
	},
}
