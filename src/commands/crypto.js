const axios = require('axios');
const debug = require('debug')('crypto');
const coinIDs = require('../coinIDs.json');

function colors(query) {
  if (query.data.data.quotes.USD.percent_change_1h < 0) return 0xF44336;
  return 0x00E676;
}

const responder = async (message, command) => {
  try {
    const coinID = coinIDs.coinmarketcap[command];
    if (!(coinID === undefined || typeof coinID === 'undefined')) {
      const query = await axios.get(`https://api.coinmarketcap.com/v2/ticker/${coinID}/?convert=PLN`);
      const embed = {
        title: `[${query.data.data.symbol}] ${query.data.data.name} price:`,
        description: ` - ${query.data.data.quotes.USD.price} USD\n- ${query.data.data.quotes.PLN.price} PLN\n**Percent Change in:**\n:clock1: :arrow_right:  ${query.data.data.quotes.USD.percent_change_1h}% (1 hour)\n:calendar: :arrow_right:  ${query.data.data.quotes.USD.percent_change_24h}% (24 hours)\n:calendar_spiral: :arrow_right:  ${query.data.data.quotes.USD.percent_change_7d}% (7 days)`,
        color: colors(query),
        timestamp: new Date(query.data.data.last_updated * 1000),
        footer: {
          icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
          text: 'Coin bot by Kiritito, Mickson & takidelfin',
        },
        image: {
          url: `https://s2.coinmarketcap.com/generated/sparklines/web/30d/usd/${coinID}.png`,
        },
        author: {
          name: 'Coin bot',
          url: 'https://github.com/quritto/coin_bot',
          icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
        },
        fields: [
          {
            name: 'Chart from 30 days:',
            value: '**More charts coming soon..**',
          },
        ],
      };
      message.channel.send({ embed });
    } else {
      debug(`${command} is an undefined coin`);
    }
  } catch (err) {
    debug(err);
  }
};

module.exports = responder;
