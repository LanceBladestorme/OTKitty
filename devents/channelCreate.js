module.exports = (client, channel) => {
if (channel.type === 'text') {
  let findLogs = client.guilds.cache.find(x => x.id === channel.guild.id).channels.cache.find(x => x.name === 'logs')
  findLogs ? findLogs.send(`\`CHANNEL CREATED: ${channel.name}\``) : console.log('No logs channel!')
}
if (channel.type === 'voice') {
  let findLogs = client.guilds.cache.find(x => x.id === channel.guild.id).channels.cache.find(x => x.name === 'logs')
    findLogs ? findLogs.send(`\`CHANNEL CREATED: ${channel.name}\``) : console.log('No logs channel!')
}
}
