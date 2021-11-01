const {Router} = require('express');
const router = Router();

const getCharacter = require('../Controllers/getCharacter')
const {createCharacter} = require('../Controllers/createCharacter');
const {createCharacter2} = require('../Controllers/createCharacter');
const getAllCharacters = require('../Controllers/getAllCharacters');



router.get('/' , getAllCharacters)
router.post('/' , createCharacter)
router.get('/:id' , getCharacter)
router.post('/:characterId/episode/:episodeId' , createCharacter2)


module.exports = router