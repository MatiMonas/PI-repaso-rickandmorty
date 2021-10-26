const {Router} = require('express');

const router = Router();

const characterRoutes = require('./character');
const episodeRoutes = require('./episode')

router.use('/character' , characterRoutes)
router.use('/episodes' , episodeRoutes)


module.exports = router;