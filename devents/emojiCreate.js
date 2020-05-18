module.exports = (client, emoji) => {
const log = client.guilds.cache.find(x => x.id === emoji.guild.id).channels.cache.find(x => x.name === 'logs');
return log ? log.send(`\`NEW EMOJI CREATED:\` <:${emoji.name}:${emoji.id}>`) : console.log('No logs channel!');
};
