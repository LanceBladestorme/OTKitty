module.exports = client =>  {
  const findLogs = client.guilds.cache.map(function (m) {
    if (!m.channels.cache.find(x => x.name === 'logs')) {
      return;
    } else {
      return client.channels.cache.get(m.channels.cache.find(x => x.name === 'logs').id).send('\`I am online!\`')
    }
  })
};
