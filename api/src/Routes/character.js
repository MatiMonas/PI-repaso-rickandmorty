const {Router} = require('express');
const router = Router();

const getCharacters = require('../Controllers/getCharacters')
const getDBCharacters = require('../Controllers/getDBCharacters')
const {createCharacter} = require('../Controllers/createCharacter');
const {createCharacter2} = require('../Controllers/createCharacter');
const getAllCharacters = require('../Controllers/getAllCharacters');


router.get('/', getCharacters)
router.get('/all' , getAllCharacters)
router.get('/db', getDBCharacters)
router.post('/create' , createCharacter)
router.post('/:characterId/episode/:episodeId' , createCharacter2)


module.exports = router