const data = [
  {
    id: 1,
    author_id: 1,
    content: 'First post of John Doe.'
  },
  //
];

/** @param {import('knex')} knex */
exports.seed = (knex) => {
  const table = knex('posts');

  return table.del()
    .then(() => table.insert(data)); // Inserts seed entries
};
