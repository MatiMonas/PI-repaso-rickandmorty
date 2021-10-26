const {Router} = require('express')
const router = Router()

const {getEpisodes, postEpisodes} = require('../Controllers/episodes')

router.get('/', getEpisodes)
router.post('/create', postEpisodes)

module.exports = router