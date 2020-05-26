'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Albums', 'ArtistId', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Artist', // name of Target model
          ArtistId: 'id', // key in Target model
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Albums', 'ArtistId');
  },
};
