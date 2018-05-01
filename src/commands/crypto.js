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
    const lskQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/lisk/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[LSK] Lisk price:')
      .setColor(colors(lskQuery))
      .setDescription(` - ${lskQuery.data[0].price_usd} USD
- ${lskQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${lskQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${lskQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${lskQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const game = async (message) => {
  try {
    const gameQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/game/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[GAME] GAME price:')
      .setColor(colors(gameQuery))
      .setDescription(` - ${gameQuery.data[0].price_usd} USD
- ${gameQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${gameQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${gameQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${gameQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const dash = async (message) => {
  try {
    const dashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dash/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[DASH] DASH price:')
      .setColor(colors(dashQuery))
      .setDescription(` - ${dashQuery.data[0].price_usd} USD
- ${dashQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dashQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dashQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dashQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const btg = async (message) => {
  try {
    const btgQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[BTG] Bitcoin Gold price:')
      .setColor(colors(btgQuery))
      .setDescription(` - ${btgQuery.data[0].price_usd} USD
- ${btgQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${btgQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${btgQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${btgQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const xmr = async (message) => {
  try {
    const xmrQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/monero/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[XMR] Monero price:')
      .setColor(colors(xmrQuery))
      .setDescription(` - ${xmrQuery.data[0].price_usd} USD
- ${xmrQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xmrQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xmrQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xmrQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const xrp = async (message) => {
  try {
    const xrpQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[XRP] Ripple price:')
      .setColor(colors(xrpQuery))
      .setDescription(` - ${xrpQuery.data[0].price_usd} USD
- ${xrpQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xrpQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xrpQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xrpQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const mag = async (message) => {
  try {
    const magQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/magnet/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[MAG] Magnet price:')
      .setColor(colors(magQuery))
      .setDescription(` - ${magQuery.data[0].price_usd} USD
- ${magQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${magQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${magQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${magQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const doge = async (message) => {
  try {
    const dogeQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dogecoin/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[DOGE] DogeCoin price:')
      .setColor(colors(dogeQuery))
      .setDescription(` - ${dogeQuery.data[0].price_usd} USD
- ${dogeQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dogeQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dogeQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dogeQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const etn = async (message) => {
  try {
    const etnQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/electroneum/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[ETN] Electroneum price:')
      .setColor(colors(etnQuery))
      .setDescription(` - ${etnQuery.data[0].price_usd} USD
- ${etnQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${etnQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${etnQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${etnQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const bch = async (message) => {
  try {
    const bchQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[BCH] BitCoin Cash price:')
      .setColor(colors(bchQuery))
      .setDescription(` - ${bchQuery.data[0].price_usd} USD
- ${bchQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${bchQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${bchQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${bchQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const eos = async (message) => {
  try {
    const eosQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/eos/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[EOS] EOS price:')
      .setColor(colors(eosQuery))
      .setDescription(` - ${eosQuery.data[0].price_usd} USD
- ${eosQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${eosQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${eosQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${eosQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const iota = async (message) => {
  try {
    const iotaQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/iota/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[MIOTA] IOTA price:')
      .setColor(colors(iotaQuery))
      .setDescription(` - ${iotaQuery.data[0].price_usd} USD
- ${iotaQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${iotaQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${iotaQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${iotaQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const zcash = async (message) => {
  try {
    const zcashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/zcash/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[ZEC] Zcash price:')
      .setColor(colors(zcashQuery))
      .setDescription(` - ${zcashQuery.data[0].price_usd} USD
- ${zcashQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${zcashQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${zcashQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${zcashQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};


const steem = async (message) => {
  try {
    const steemQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/steem/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[STEEM] Steem price:')
      .setColor(colors(steemQuery))
      .setDescription(` - ${steemQuery.data[0].price_usd} USD
- ${steemQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${steemQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${steemQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${steemQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

const steemd = async (message) => {
  try {
    const steemdQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/steem-dollars/?convert=PLN');
    const embed = new Discord.RichEmbed()
      .setTitle('[SBD] Steem Dollars price:')
      .setColor(colors(steemdQuery))
      .setDescription(` - ${steemdQuery.data[0].price_usd} USD
- ${steemdQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${steemdQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${steemdQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${steemdQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter(`Price at:${time()}`);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = {
  btc, eth, ltc, lsk, game, dash, btg, xmr, xrp, mag, doge, etn, bch, eos, iota, zcash, steem, steemd
};
