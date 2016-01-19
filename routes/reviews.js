var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Reviews() {
  return knex('reviews');
}

/* Movies Routes Go Here. */

router.get('/:movie_id/reviews', function (req, res, next) {
  Reviews().select().then(function(results) {
    res.render('movies/show');
  });
});

router.get('/:movie_id/reviews/new', function (req, res, next) {
  res.render('movies/show');
});

router.post('/:movie_id/reviews', function (req, res, next) {
  Movies().insert( {movie_id: 80, author: "bob", title: "stuff", rating: 4}).then(function(results) {
    res.redirect('/movies/2/reviews');
  });
});

module.exports = router;
