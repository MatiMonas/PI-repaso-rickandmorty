const { Character, Episode } = require('../Models/index.js');

const createCharacter = async (req, res, next) => {
    console.log('enter');
    const { name, image } = req.body;
    Character.create({
        name,
        image,
    })
        .then((character) => res.json(character))
        .catch((err) => next(err));
};

const createCharacter2 = async (req, res, next) => {
    const { characterId, episodeId } = req.params;
    const character = await Character.findByPk(characterId);
    const episode = await Episode.findByPk(episodeId);
    const result = await character.addEpisode(episode);
    res.send(result)
};

module.exports = {createCharacter, createCharacter2};
