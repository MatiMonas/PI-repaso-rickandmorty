const { Character, Episode } = require('../Models/index');

const getDBCharacters = (_req, res, next) => {
    Character.findAll({
        include: Episode
    }).then((characters) => {
        return res.status(200).json(characters);
    });
};

module.exports = getDBCharacters;
