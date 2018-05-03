const Discord = require('discord.js');
const axios = require('axios');
const debug = require('debug')('crypto');
const coinIDs = require('../coinIDs.json');

function time() {
  // Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
  const date = new Date();

  const year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
  let day = date.getUTCDate();
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();

  month = (month < 10) ? `0${month}` : month;
  day = (day < 10) ? `0${day}` : day;
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
}

function colors(query) {
  if (query.data.data.quotes.USD.percent_change_1h < 0) return 0xF44336;
  return 0x00E676;
}

const responder = async (message, command) => {
  try {
    const coinID = coinIDs[command];
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
      .setFooter(`Price at:${time()} UTC`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = responder;
