require("dotenv").config();

module.exports = async (client) => {

  client.user.setPresence({
    activities: [{ name: `${process.env.STATUSBOT}` }],
    status: `${process.env.DISCORDSTATUS}`,
  });
};
