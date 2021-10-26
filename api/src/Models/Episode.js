const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Episode', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        createdInDB: {
            type: DataTypes.STRING,
            defaultValue: 'yes',
        },
    });
};
