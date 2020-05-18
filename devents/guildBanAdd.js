module.exports = (client, guild, user) => {
const log = guild.channels.cache.find(x => x.name === 'logs');
const bannedUser = client.users.cache.find(x => x.id === user.id)
return log ? log.send(`\`USER BANNED:\` ${bannedUser}`) : console.log('No logs channel!');
};
