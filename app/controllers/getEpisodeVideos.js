/** @format */
const API = require('animeflv-scrapper')
module.exports = {
	getEpisodeVideos: async (req, res) => {
		// res.io.emit('Hello', 'Hello World')
		// res.json('Hello World')
		const { title, episode } = req.body

		// Get maximum 5 video links of each episode
		API.getEpisodeVideos(episode, title).then((data) => {
			res.json(data)
		})
	},
}
