/** @format */

const express = require('express')
const router = express.Router()

const { init } = require('../controllers')
const { getAllAnime } = require('../controllers/getAllAnime')
const { getAnime } = require('../controllers/getAnime')
const { searchAnime } = require('../controllers/searchAnime')
const { getAnimeInfo } = require('../controllers/getAnimeInfo')
const { getEpisodeVideos } = require('../controllers/getEpisodeVideos')

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
// 	console.log('Time: ', Date.now())
// 	next()
// })

// define routes
router.get('/init', init)
router.get('/getAllAnime', getAllAnime)
router.post('/getAnime', getAnime)
router.post('/searchAnime', searchAnime)
router.post('/getAnimeInfo', getAnimeInfo)
router.post('/getEpisodeVideos', getEpisodeVideos)
module.exports = router
