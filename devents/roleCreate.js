module.exports = (client, role) => {
  const log = role.guild.channels.cache.find(x => x.name === 'logs');
  return log ? log.send(`\`ROLE CREATED: ${role.name}\``) : console.log('No logs channel!');
}
