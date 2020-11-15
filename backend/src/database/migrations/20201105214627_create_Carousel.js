
exports.up = function(knex) {
    return knex.schema.createTable('carousel', function (table) {
        table.increments();
        table.string('user_id');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('carousel');
};