const { Client, GatewayIntentBits } = require('discord.js');

/* Misc */
console.clear();

/* Initialize client */
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
    ],
});

const autoroleComponents = async () => {
  await require('./util/autoroleClient')(client);
}

autoroleComponents();