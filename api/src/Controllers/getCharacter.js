const axios = require('axios');
const { Character, Episode } = require('../Models/index');


//BUSQUEDA POR IDS
const getCharacter = async (req, res, next) => {
    const { id } = req.params;
    const isFromDb = id.includes('-');
    let character;
    try {
        if (!id) return next({ msg: 'No character id sent. FATAL ERROR' });
        console.log('entre')

        if (isFromDb) {
            character = await Character.findByPk(id, {
                include: Episode,
            });
            return res.json(character);
        } else {
            character = await axios.get('https://rickandmortyapi.com/api/character/' + id);
            return res.json(character.data);
        }
    } catch (err) {
        next(err);
    } 
};
module.exports = getCharacter;
