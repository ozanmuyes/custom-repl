/** @param {Knex} knex */
exports.up = (knex) => knex.schema.createTable('persons', (table) => {
  table.increments('id');
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  //
});

/** @param {Knex} knex */
exports.down = (knex) => knex.schema.dropTable('persons');


/** @typedef {import('knex')} Knex */
