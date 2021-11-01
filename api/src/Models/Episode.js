const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Episode', {
    
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
       
    });
};
