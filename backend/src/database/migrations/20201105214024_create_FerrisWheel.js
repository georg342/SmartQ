
exports.up = function(knex) {
    return knex.schema.createTable('ferriswheel', function (table) {
        table.increments();
        table.string('user_id');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ferriswheel');
};