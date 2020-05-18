module.exports = (client, emoji) => {
const log = client.guilds.cache.find(x => x.id === channel.guild.id).channels.cache.find(x => x.name === 'logs')
return log ? log.send(`\`EMOJI UPDATED:\` <:${emoji.name}:${emoji.id}> has been renamed :${emoji.name}:`) : console.log('No logs channel!');
};
