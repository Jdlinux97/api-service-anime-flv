/** @format */
const API = require('animeflv-scrapper')
module.exports = {
	getAnime: async (req, res) => {
		// res.io.emit('Hello', 'Hello World')
		// res.json('Hello World')
		const { genre, year, type, status, order, page } = req.body
		const params = {
			genre: genre,
			year: year,
			type: type,
			status: status,
			order: order,
			page: page,
		}

		// Get a list of 20 animes according to the passed parameters
		API.getAnimes(params).then((data) => {
			res.json(data)
		})
	},
}
