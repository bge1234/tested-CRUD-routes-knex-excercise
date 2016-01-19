exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function(table){
    table.increments();
    table.integer('movie_id')
    table.string('author');
    table.string('title');
    table.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
