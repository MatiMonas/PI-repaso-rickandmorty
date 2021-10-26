const { Sequelize } = require('sequelize');


//Factory Models

const CharacterFactory = require('./Character');
const EpisodeFactory = require('./Episode');

const sequelize = new Sequelize(`postgres://matimonas:sasasa11@localhost:5432/rickandmorty`, {
    logging: false,
    native: false,
});
const Character = CharacterFactory(sequelize);
const Episode = EpisodeFactory(sequelize);

//Aca van a ir las relaciones
Episode.belongsToMany(Character, { through: 'Character_Episodes' });
Character.belongsToMany(Episode, { through: 'Character_Episodes'});

module.exports = {
    Character,
    Episode,
    conn: sequelize,
};
