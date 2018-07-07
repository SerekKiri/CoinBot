const Discord = require('discord.js');
const axios = require('axios');
const debug = require('debug')('crypto');
const coinIDs = require('../coinIDs.json');
const transform = require('unix-timestamp-transform');

function time(query) {
  const unixTime = query.data.data.last_updated;
  const date = transform.transformUnixTime(unixTime).toString();
  return date;
}

function colors(query) {
  if (query.data.data.quotes.USD.percent_change_1h < 0) return 0xF44336;
  return 0x00E676;
}

function Round(n, k)
{
    const factor = Math.pow(10, k)
    return Math.round(n*factor)/factor
}

const responder = async (message, command) => {
  try {
    const coinID = coinIDs.coinmarketcap[command];
    const query = await axios.get(`https://api.coinmarketcap.com/v2/ticker/${coinID}/?convert=PLN`);
    const embed = new Discord.RichEmbed()
      .setTitle(`[${query.data.data.symbol}] ${query.data.data.name} price:`)
      .setColor(colors(query))
      .setDescription(` - ${query.data.data.quotes.USD.price} USD
- ${query.data.data.quotes.PLN.price} PLN 
- Percent Change in:
    :clock1: :arrow_right:  ${query.data.data.quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${query.data.data.quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${query.data.data.quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at: ${time(query)}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = responder;
