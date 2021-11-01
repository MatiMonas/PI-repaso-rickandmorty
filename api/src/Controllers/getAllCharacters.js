const { Character, Episode } = require('../Models/index');
const axios = require('axios');
const { Op } = require('sequelize');

const getAllCharacters = async (req, res, next) => {
    const { name } = req.query;
    let DBcharacters;
    let APIcharacters;

    if (name) {
        try {
            
            DBcharacters = await Character.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`,
                    },
                },
            });

            let response = await axios.get(
                'https://rickandmortyapi.com/api/character/?name=' + name,
            );
            APIcharacters = response.data.results;
        } catch (err) {
            next(err);
        }
        const characters = [...DBcharacters, ...APIcharacters];
        res.json(characters);
    } else {
        try {
            const API_characters = await axios.get('https://rickandmortyapi.com/api/character/');
            const API_results = API_characters.data.results;
            const DB_characters = await Character.findAll();

            const API_formated_characters = API_results.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    image: character.image,
                };
            });
            res.json([...DB_characters, ...API_formated_characters]);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = getAllCharacters;
