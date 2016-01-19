var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Movies() {
  return knex('movies');
}

/* Movies Routes Go Here. */

router.get('/', function (req, res, next) {
  Movies().select().then(function(results) {
    res.render('movies/index');
  });
});

router.get('/new', function (req, res, next) {
  res.render('movies/new');
});

router.post('/', function (req, res, next) {
  Movies().insert( {director: "bob", title: "stuff"}).then(function(results) {
    res.redirect('/movies');
  });
});

router.get('/:id', function (req, res, next) {
  Movies().where("id", req.params.id).select().then(function(results) {
    res.render('movies/show');
  });
});

router.get('/:id/edit', function (req, res, next) {
  Movies().where("title", "stuff").select().then(function(results) {
    res.render('movies/edit');
  });
});

router.post('/:id', function (req, res, next) {
  Movies().where("title", "stuff").update( {director: "bobb", title: "stuff"}).then(function(results) {
    res.redirect('/movies');
  });
});

router.post('/:id/delete', function (req, res, next) {
  Movies().where("title", "stuff").del().then(function(results) {
    res.redirect('/movies');
  });
});

module.exports = router;
