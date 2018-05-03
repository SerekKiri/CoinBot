const Discord = require('discord.js');
const axios = require('axios');
const debug = require('debug')('crypto');

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
  if (query.data.data['1'].quotes.USD.percent_change_1h < 0) return 0xF44336;
  return 0x00E676;
}

const btc = async (message) => {
  try {
    const btcQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[BTC] BitCoin price:')
      .setColor(colors(btcQuery))
      .setDescription(` - ${btcQuery.data.data['1'].quotes.USD.price} USD
- ${btcQuery.data.data['1'].quotes.PLN.price} PLN 
- Percent Change in:
    :clock1: :arrow_right:  ${btcQuery.data.data['1'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${btcQuery.data.data['1'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${btcQuery.data.data['1'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const eth = async (message) => {
  try {
    const ethQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[ETH] Ethereum price:')
      .setColor(colors(ethQuery))
      .setDescription(` - ${ethQuery.data.data['1027'].quotes.USD.price} USD
- ${ethQuery.data.data['1027'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${ethQuery.data.data['1027'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${ethQuery.data.data['1027'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${ethQuery.data.data['1027'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};


const ltc = async (message) => {
  try {
    const ltcQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[LTC] LiteCoin price:')
      .setColor(colors(ltcQuery))
      .setDescription(` - ${ltcQuery.data.data['2'].quotes.USD.price} USD
- ${ltcQuery.data.data['2'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${ltcQuery.data.data['2'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${ltcQuery.data.data['2'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${ltcQuery.data.data['2'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const lsk = async (message) => {
  try {
    const lskQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[LSK] Lisk price:')
      .setColor(colors(lskQuery))
      .setDescription(` - ${lskQuery.data.data['1214'].quotes.USD.price} USD
- ${lskQuery.data.data['1214'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${lskQuery.data.data['1214'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${lskQuery.data.data['1214'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:   ${lskQuery.data.data['1214'].quotes.USD.percent_change_7d}%% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};


const dash = async (message) => {
  try {
    const dashQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[DASH] DASH price:')
      .setColor(colors(dashQuery))
      .setDescription(` - ${dashQuery.data.data['131'].quotes.USD.price} USD
- ${dashQuery.data.data['131'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dashQuery.data.data['131'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dashQuery.data.data['131'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dashQuery.data.data['131'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const btg = async (message) => {
  try {
    const btgQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[BTG] Bitcoin Gold price:')
      .setColor(colors(btgQuery))
      .setDescription(` - ${btgQuery.data.data['2083'].quotes.USD.price} USD
- ${btgQuery.data.data['2083'].quotes.USD.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${btgQuery.data.data['2083'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${btgQuery.data.data['2083'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${btgQuery.data.data['2083'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const xmr = async (message) => {
  try {
    const xmrQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[XMR] Monero price:')
      .setColor(colors(xmrQuery))
      .setDescription(` - ${xmrQuery.data.data['328'].quotes.USD.price} USD
- ${xmrQuery.data.data['328'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xmrQuery.data.data['328'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xmrQuery.data.data['328'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xmrQuery.data.data['328'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const xrp = async (message) => {
  try {
    const xrpQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[XRP] Ripple price:')
      .setColor(colors(xrpQuery))
      .setDescription(` - ${xrpQuery.data.data['52'].quotes.USD.price} USD
- ${xrpQuery.data.data['52'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xrpQuery.data.data['52'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xrpQuery.data.data['52'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xrpQuery.data.data['52'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const doge = async (message) => {
  try {
    const dogeQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[DOGE] DogeCoin price:')
      .setColor(colors(dogeQuery))
      .setDescription(` - ${dogeQuery.data.data['74'].quotes.USD.price} USD
- ${dogeQuery.data.data['74'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dogeQuery.data.data['74'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dogeQuery.data.data['74'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dogeQuery.data.data['74'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const etn = async (message) => {
  try {
    const etnQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[ETN] Electroneum price:')
      .setColor(colors(etnQuery))
      .setDescription(` - ${etnQuery.data.data['2137'].quotes.USD.price} USD
- ${etnQuery.data.data['2137'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${etnQuery.data.data['2137'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${etnQuery.data.data['2137'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${etnQuery.data.data['2137'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const bch = async (message) => {
  try {
    const bchQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[BCH] BitCoin Cash price:')
      .setColor(colors(bchQuery))
      .setDescription(` - ${bchQuery.data.data['1831'].quotes.USD.price} USD
- ${bchQuery.data.data['1831'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${bchQuery.data.data['1831'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${bchQuery.data.data['1831'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${bchQuery.data.data['1831'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const eos = async (message) => {
  try {
    const eosQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[EOS] EOS price:')
      .setColor(colors(eosQuery))
      .setDescription(` - ${eosQuery.data.data['1765'].quotes.USD.price} USD
- ${eosQuery.data.data['1765'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${eosQuery.data.data['1765'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${eosQuery.data.data['1765'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${eosQuery.data.data['1765'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const iota = async (message) => {
  try {
    const iotaQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[MIOTA] IOTA price:')
      .setColor(colors(iotaQuery))
      .setDescription(` - ${iotaQuery.data.data['1720'].quotes.USD.price} USD
- ${iotaQuery.data.data['1720'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${iotaQuery.data.data['1720'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${iotaQuery.data.data['1720'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${iotaQuery.data.data['1720'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const zcash = async (message) => {
  try {
    const zcashQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[ZEC] Zcash price:')
      .setColor(colors(zcashQuery))
      .setDescription(` - ${zcashQuery.data.data['1437'].quotes.USD.price} USD
- ${zcashQuery.data.data['1437'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${zcashQuery.data.data['1437'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${zcashQuery.data.data['1437'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${zcashQuery.data.data['1437'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};


const steem = async (message) => {
  try {
    const steemQuery = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[STEEM] Steem price:')
      .setColor(colors(steemQuery))
      .setDescription(` - ${steemQuery.data.data['1230'].quotes.USD.price} USD
- ${steemQuery.data.data['1230'].quotes.PLN.price} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${steemQuery.data.data['1230'].quotes.USD.percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${steemQuery.data.data['1230'].quotes.USD.percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${steemQuery.data.data['1230'].quotes.USD.percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = {
  btc, eth, ltc, lsk, dash, btg, xmr, xrp, doge, etn, bch, eos, iota, zcash, steem };
