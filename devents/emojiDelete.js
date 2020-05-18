module.exports = (client, emoji) => {
const log = client.guilds.cache.find(x => x.id === emoji.guild.id).channels.cache.find(x => x.name === 'logs');
return log ? log.send(`\`EMOJI DELETED: :${emoji.name}:\``) : console.log('No logs channel!');
};
