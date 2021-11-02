const { Character, Episode } = require('../Models/index');
const axios = require('axios');
const { Op } = require('sequelize');

const getAllCharacters = async (req, res, next) => {
  const { name } = req.query;
  let dataBaseCharacters;
  let APIcharacters;

  if (name) {
    try {
      dataBaseCharacters = await Character.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      let characterResult = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`,
      );
      APIcharacters = characterResult.data.results?.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
        };
      });

      const characters = [...dataBaseCharacters, ...APIcharacters];

      res.json(characters);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const API_characters = await axios.get(
        'https://rickandmortyapi.com/api/character/',
      );
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
      console.log('rompi');
    }
  }
};

module.exports = getAllCharacters;
