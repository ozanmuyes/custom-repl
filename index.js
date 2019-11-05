const repl = require('repl');

const replServer = repl.start({
  prompt: 'custom-repl > ',
});

Object.defineProperties(replServer.context, {
  knex: { value: knex },
  //
});
