const {  role_id } = require('../../config.json');

module.exports = (client, member) => {

    if(member.user.bot == false) return;
    const role = member.guild.roles.cache.find(role => role.id === role_id);

    if(member.roles.cache.has(role_id)) return;

    member.roles.add(role).catch( err => { return; });

}

  