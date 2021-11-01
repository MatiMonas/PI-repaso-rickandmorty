const { Character, Episode } = require('../Models/index.js');

const createCharacter = async (req, res, next) => {
    const { name, image, episodes } = req.body;
    Character.create({
        name,
        image,
    })
        .then((character) => {
            return character.setEpisodes(episodes);
        })
        .then((characterWithEpisodes) => {
            res.json(characterWithEpisodes);
        })
        .catch((err) => next(err));
};

const createCharacter2 = async (req, res, next) => {
    const { characterId, episodeId } = req.params;
    const character = await Character.findByPk(characterId);
    const episode = await Episode.findByPk(episodeId);
    const result = await character.addEpisode(episode);
    res.send(result);
}; 

module.exports = { createCharacter, createCharacter2 };
