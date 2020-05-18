const prefix = '!'

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
  if (message.channel.name === 'announcements') return message.delete();
    if (message.channel.name !== 'bot-commands') return message.delete()
    let divideMessage = message.content.split(' ');
    let cmd = divideMessage[0];
    let args = divideMessage.slice(1);
    let commandData = client.commands.get(cmd.slice(prefix.length));
    if (!commandData) return;
    message.delete({ timeout: 5000 })
    commandData.run(client, message, args)
  }
//BLACKLIST LISTENER
  const blacklist = ['nigger', 'nigga', 'skinhead', 'cracker', 'chink', 'niggar', 'nibba', 'faggot', 'fag', 'dike']
  const blacklistCheck = message.content.toLowerCase().replace(/\s+/g, '').replace(/!/g, '').replace(/-/g, '').replace(/\./g, '').replace(/\?/g, '').replace(/_/g, '')
  for(let i = 0; i < blacklist.length; i++) {
    if (blacklistCheck.includes(blacklist[i])) {
      message.delete()
    }
  }
//ANNOUNCEMENTS LISTENER
  if(message.channel.name === 'announcements' && !message.content.startsWith(prefix)){
    client.announcements.get('announcementChannel').run(client, message)
  }
  if(message.content.includes('http://www.twitch.tv/')){
    client.announcements.get('twitch').run(client, message)
  }
}
