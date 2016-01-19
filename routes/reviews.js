var express = require('express');
var router = express.Router();

/* Movies Routes Go Here. */

router.get('/:movie_id/reviews', function (req, res, next) {
  res.render('movies/show');
});

router.get('/:movie_id/reviews/new', function (req, res, next) {
  res.render('movies/reviews/new');
});

router.post('/:movie_id/reviews', function (req, res, next) {
  res.redirect('/movies/show');
});

router.get('/:movie_id/reviews/:id', function (req, res, next) {
  res.render('movies/reviews/show');
});

router.get('/:movie_id/reviews/:id/edit', function (req, res, next) {
  res.render('movies/reviews/edit');
});

router.post('/:movie_id/reviews/:id', function (req, res, next) {
  res.redirect('/movies/reviews');
});

router.post('/:movie_id/reviews/:id/delete', function (req, res, next) {
  res.redirect('/movies/reviews');
});

module.exports = router;
