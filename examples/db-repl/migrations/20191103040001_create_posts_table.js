/** @param {Knex} knex */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
  table.increments('id');
  table.integer('author_id').notNullable();
  table.string('content').notNullable();
  //
});

/** @param {Knex} knex */
exports.down = (knex) => knex.schema.dropTable('posts');


/** @typedef {import('knex')} Knex */
