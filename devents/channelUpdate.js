module.exports = (client, oldChannel, newChannel) => {
let findLogs = client.guilds.cache.find(x => x.id === newChannel.guild.id).channels.cache.find(x => x.name === 'logs')
findLogs ? findLogs.send(`\`CHANNEL SETTINGS UPDATED: ${newChannel.name}\``) : console.log('No logs channel!')
};
