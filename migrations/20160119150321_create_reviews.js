exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.string('author');
    table.integer('rating');
    table.integer('movie_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
