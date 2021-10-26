const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Character', {
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
        image:{
            type: DataTypes.STRING,
            allowNull: false,

        },

        // planet: {
        //     type: DataTypes.STRING,
        //     allowNull:false,
        //     unique:false,
        // },
        createdInDB : {
            type: DataTypes.STRING,
            defaultValue: 'yes'
        }
    });
};
