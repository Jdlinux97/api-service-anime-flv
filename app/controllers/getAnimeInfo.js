/** @format */
const API = require('animeflv-scrapper')
module.exports = {
	getAnimeInfo: async (req, res) => {
		// res.io.emit('Hello', 'Hello World')
		// res.json('Hello World')
		const { title } = req.body
		console.log(title)
		// Get info about an specific anime (see docs for more)
		API.getAnimeInfo(title).then((data) => {
			res.json(data)
		})
	},
}
