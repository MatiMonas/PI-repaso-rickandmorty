const { Character, Episode } = require('../Models/index');
const axios = require('axios');

const getAllCharacters = async (req, res, next) => {
    const API_characters = await axios.get('https://rickandmortyapi.com/api/character/');
    const API_results = API_characters.data.results;
    const DB_characters =await Character.findAll({
        include: Episode,
    });

    res.json([...DB_characters, ...API_results])
};

module.exports = getAllCharacters;
