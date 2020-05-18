exports.run = (client, message) => {
  let findAnnouncementsRole = message.member.roles.cache.find(x => x.name === 'Announcement');
  if (findAnnouncementsRole) {
  message.channel.send('', { embed: {
      'timestamp': message.createdTimestamp,
      'footer': {
        'text': message.guild.name,
        'icon_url': message.guild.iconURL
      },
      'fields': [
        {
          'name': `ANNOUNCEMENT FROM ${message.author.username.toUpperCase()}`,
          'value': message.content
        }
      ],
      "thumbnail": {
        "url": message.author.avatarURL(['jpg'])
      }
    }
  })}
  message.delete()
}
