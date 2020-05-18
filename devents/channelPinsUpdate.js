module.exports = (client, channel) => {
let findLogs = client.guilds.cache.find(x => x.id === channel.guild.id).channels.cache.find(x => x.name === 'logs')
findLogs ? findLogs.send(`\`PIN UPDATED: ${channel.name}\``) : console.log('No logs channel!')
}
