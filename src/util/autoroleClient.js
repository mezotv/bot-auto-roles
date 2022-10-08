require('dotenv').config();

module.exports = (client) => {
/* Basically loading the event loader ironic right */
  require('./eventLoader')(client);

  /* Logging the bot in. */
  client.login(process.env.TOKEN);
};
