'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    track_name: DataTypes.STRING,
    track_duration: DataTypes.NUMERIC,
    album_id: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};