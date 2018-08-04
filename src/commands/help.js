const debug = require('debug')('help');

const help = async (message) => {
  try {
    const embed = {
      title: 'Coin bot commands:',
      description: '- !help (All commands)\n- !coins (All coins)\n- !github (Coin bot repository)\n- !donate (We are collecting for hosting)\n**Now in coins embeds you can find charts!**',
      color: 0x4c4cff,
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
        text: 'Coin bot by Kiritito, Mickson & takidelfin',
      },
      author: {
        name: 'Coin bot',
        url: 'https://github.com/quritto/coin_bot',
        icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
      },
      fields: [
        {
          name: 'Legend:',
          value: ':clock1: - 1 hour\n:calendar: - 24 hours\n:calendar_spiral: - 7 days',
        },
      ],
    };
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = help;
