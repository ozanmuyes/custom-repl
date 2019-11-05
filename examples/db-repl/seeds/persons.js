const data = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Doe',
  },
  //
];

/** @param {import('knex')} knex */
exports.seed = (knex) => {
  const table = knex('persons');

  return table.del()
    .then(() => table.insert(data)); // Inserts seed entries
};
