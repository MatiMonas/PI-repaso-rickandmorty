const axios = require('axios');
const { Character, Episode } = require('../Models/index');

//BUSQUEDA POR IDS
const getCharacter = async (req, res, next) => {
  const { id } = req.params;
  const isFromDb = id.includes('-');
  let character;
  try {
    if (!id) return next({ msg: 'No character id sent. FATAL ERROR' });

    if (isFromDb) {
      character = await Character.findByPk(id, {
        include: Episode,
      });

      character = {
        id: character.id,
        name: character.name,
        image: character.image,
        episodes: character.Episodes.map((episode) => {
          return {
            id: episode.id,
            name: episode.name,
          };
        }),
      };
    } else {
      let characterResponse = await axios.get(
        'https://rickandmortyapi.com/api/character/' + id,
      );
      characterResponse = characterResponse.data;

      let episodesList = characterResponse.episode.map((episode) =>
        episode.split('/').pop(),
      );

      episodesList = episodesList.join(',');

      let episodes = await axios.get(
        'https://rickandmortyapi.com/api/episode/' + episodesList,
      );
      episodes = episodes.data.map((episodes) => {
        return {
          id: episodes.id,
          name: episodes.name,
        };
      });

      character = {
        id: characterResponse.id,
        name: characterResponse.name,
        image: characterResponse.image,
        episodes: episodes,
      };
    }
  } catch (err) {
    next(err);
  }
  res.json(character);
};
module.exports = getCharacter;
