const { Actor } = require('../models/actors.model');
const { Movies } = require('../models/movies.model');
const { Review } = require('../models/review.model');
const { User } = require('../models/users.model');
const { ActorsInMovies } = require('../models/actorInMovie.model');


const initModels = () => {
  // uno a muchos | usuario <--> review
  User.hasMany(Review);
  Review.belongsTo(User);

  // uno a muchos | movies <--> review
  Movies.hasMany(Review);
  Review.belongsTo(Movies);

  // muchos a muchos | 1 User <--> M Comment
  Movies.belongsToMany(Actor, { through: ActorsInMovies });
  Actor.belongsToMany(Movies, { through: ActorsInMovies });
};

module.exports = { initModels };