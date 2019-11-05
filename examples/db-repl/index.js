'use strict';

/**
 * In-memory SQLite REPL with Knex.js and Objection.js
 *
 * Execute `sudo chmod +x ./db-repl` in this directory
 * and then `./db-repl`. Once you see the 'dp-repl >'
 * prompt write your JavaScript code - you MAY use
 * top-level `await` too! To see it action run
 * `await migrate()` and `await seed()` then
 * `await getPosts()`.
 */

const repl = require('repl');

// yarn add knex sqlite3 objection
const Knex = require('knex');
const { Model } = require('objection');

// #region Database Initialization
const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: ':memory:'
  },
  // migrations: {
  //   directory: `${__dirname}/migrations`,
  // },
  // seeds: {
  //   directory: `${__dirname}/seeds`,
  // },
  useNullAsDefault: true,
  // See https://github.com/knex/knex/issues/1871
  pool: {
    min: 1,
    max: 1,
    destroyTimeoutMillis: 360000*1000, // 100 hrs
    idleTimeoutMillis: 360000*1000, // 100 hrs
  },
});

Model.knex(knex);
// #endregion Database Initialization

const Person = require('./models/Person');
const Post = require('./models/Post');
//

// #region REPL Initialization
const replServer = repl.start({
  // See https://nodejs.org/docs/latest-v10.x/api/repl.html#repl_repl_start_options
  prompt: 'db-repl > ',
});

replServer.on('exit', async () => {
  try {
    await knex.destroy();
    process.exit(0);
  } catch (err) {
    process.stderr.write(`${JSON.stringify(err)}\n`);
    process.exit(1);
  }
});
// #endregion REPL Initialization

// NOTE To make all the exposed variables and functions read-only
//      we are using `Object.defineProperties` here on the
//      `replServer.context`.
Object.defineProperties(replServer.context, {
  knex: { value: knex },

  // Knex helpers (await them; e.g. `await migrate()`)
  //
  migrate: { value: () => knex.migrate.latest() },
  rollback: { value: () => knex.migrate.rollback(null, true) },
  seed: { value: () => knex.seed.run() },

  // Models
  //
  Person: { value: Person },
  Post: { value: Post },
  //

  // Sample query (await it; i.e. `await getPosts()`)
  getPosts: { value: async () => await Post.query().eager('author') },

  //
});
