'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Albums', 'artist_id', {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Artists', // name of Target model
          ArtistId: 'id', // key in Target model
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Albums', 'artist_id');
  },
};
