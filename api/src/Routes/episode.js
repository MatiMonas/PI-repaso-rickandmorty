const {Router} = require('express')
const router = Router()

const {getEpisodes} = require('../Controllers/episodes')

router.get('/', getEpisodes)

module.exports = router