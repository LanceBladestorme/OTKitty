module.exports = (client, channel) => {
const log = client.guilds.cache.find(x => x.id === channel.guild.id).channels.cache.find(x => x.name === 'logs');
return log ? log.send(`\`CHANNEL DELETED: ${channel.name}\``) : console.log('No logs channel!');
};
