const Discord = require('discord.js')
const axios = require('axios')

function time() {
  // Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
  const date = new Date();

  var year = date.getUTCFullYear();
  var month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
  var day = date.getUTCDate();
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var seconds = date.getUTCSeconds();

  month = (month < 10) ? '0' + month : month;
  day = (day < 10) ? '0' + day : day;
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return ' ' + hours + ':' + minutes + ':' + seconds + ' ' + day + '-' + month + '-' + year;
}




const btc = async (message) => {
  try {
    const btcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=PLN')
    function colors() {
      if (`${btcQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[BTC] BitCoin price:')
      .setColor(colors())
      .setDescription(` - ${btcQuery.data[0].price_usd} USD
- ${btcQuery.data[0].price_pln} PLN 
- Percent Change in:
    :clock1: :arrow_right:  ${btcQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${btcQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${btcQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const eth = async (message) => {
  try {
    const ethQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=PLN')
    function colors() {
      if (`${ethQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[ETH] Ethereum price:')
      .setColor(colors())
      .setDescription(` - ${ethQuery.data[0].price_usd} USD
- ${ethQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${ethQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${ethQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${ethQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}


const ltc = async (message) => {
  try {
    const ltcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    function colors() {
      if (`${ltcQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[LTC] LiteCoin price:')
      .setColor(0x009688)
      .setDescription(` - ${ltcQuery.data[0].price_usd} USD
- ${ltcQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${ltcQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${ltcQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${ltcQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const lsk = async (message) => {
  try {
    const lskQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/lisk/?convert=PLN')
    function colors() {
      if (`${lskQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[LSK] Lisk price:')
      .setColor(colors())
      .setDescription(` - ${lskQuery.data[0].price_usd} USD
- ${lskQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${lskQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${lskQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${lskQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const game = async (message) => {
  try {
    const gameQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/game/?convert=PLN')
    function colors() {
      if (`${gameQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[GAME] GAME price:')
      .setColor(colors())
      .setDescription(` - ${gameQuery.data[0].price_usd} USD
- ${gameQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${gameQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${gameQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${gameQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const dash = async (message) => {
  try {
    const dashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dash/?convert=PLN')
    function colors() {
      if (`${dashQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[DASH] DASH price:')
      .setColor(colors())
      .setDescription(` - ${dashQuery.data[0].price_usd} USD
- ${dashQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dashQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dashQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dashQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const btg = async (message) => {
  try {
    const btgQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    function colors() {
      if (`${btgQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[BTG] Bitcoin Gold price:')
      .setColor(colors())
      .setDescription(` - ${btgQuery.data[0].price_usd} USD
- ${btgQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${btgQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${btgQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${btgQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const xmr = async (message) => {
  try {
    const xmrQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/monero/?convert=PLN')
    function colors() {
      if (`${xmrQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[XMR] Monero price:')
      .setColor(colors())
      .setDescription(` - ${xmrQuery.data[0].price_usd} USD
- ${xmrQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xmrQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xmrQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xmrQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const xrp = async (message) => {
  try {
    const xrpQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/?convert=PLN')
    function colors() {
      if (`${xrpQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[XRP] Ripple price:')
      .setColor(colors())
      .setDescription(` - ${xrpQuery.data[0].price_usd} USD
- ${xrpQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${xrpQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${xrpQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${xrpQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const mag = async (message) => {
  try {
    const magQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/magnet/?convert=PLN')
    function colors() {
      if (`${magQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[MAG] Magnet price:')
      .setColor(colors())
      .setDescription(` - ${magQuery.data[0].price_usd} USD
- ${magQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${magQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${magQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${magQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const doge = async (message) => {
  try {
    const dogeQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dogecoin/?convert=PLN')
    function colors() {
      if (`${dogeQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[DOGE] DogeCoin price:')
      .setColor(colors())
      .setDescription(` - ${dogeQuery.data[0].price_usd} USD
- ${dogeQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${dogeQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${dogeQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${dogeQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const etn = async (message) => {
  try {
    const etnQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/electroneum/?convert=PLN')
    function colors() {
      if (`${etnQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[ETN] Electroneum price:')
      .setColor(colors())
      .setDescription(` - ${etnQuery.data[0].price_usd} USD
- ${etnQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${etnQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${etnQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${etnQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const bch = async (message) => {
  try {
    const bchQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=PLN')
    function colors() {
      if (`${bchQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[BCH] BitCoin Cash price:')
      .setColor(colors())
      .setDescription(` - ${bchQuery.data[0].price_usd} USD
- ${bchQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${bchQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${bchQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${bchQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const eos = async (message) => {
  try {
    const eosQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/eos/?convert=PLN')
    function colors() {
      if (`${eosQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[EOS] EOS price:')
      .setColor(colors())
      .setDescription(` - ${eosQuery.data[0].price_usd} USD
- ${eosQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${eosQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${eosQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${eosQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const iota = async (message) => {
  try {
    const iotaQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/iota/?convert=PLN')
    function colors() {
      if (`${iotaQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[MIOTA] IOTA price:')
      .setColor(colors())
      .setDescription(` - ${iotaQuery.data[0].price_usd} USD
- ${iotaQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${iotaQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${iotaQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${iotaQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const zcash = async (message) => {
  try {
    const zcashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/zcash/?convert=PLN')
    function colors() {
      if (`${zcashQuery.data[0].percent_change_1h}` < 0) {
        return 0xF44336
      } else {
        return 0x00E676
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle('[ZEC] Zcash price:')
      .setColor(colors())
      .setDescription(` - ${zcashQuery.data[0].price_usd} USD
- ${zcashQuery.data[0].price_pln} PLN
- Percent Change in:
    :clock1: :arrow_right:  ${zcashQuery.data[0].percent_change_1h}% (1 hour)
    :calendar: :arrow_right:  ${zcashQuery.data[0].percent_change_24h}% (24 hours)
    :calendar_spiral: :arrow_right:  ${zcashQuery.data[0].percent_change_7d}% (7 days)
`)
      .setFooter('Price at:' + time())
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { btc, eth, ltc, lsk, game, dash, btg, xmr, xrp, mag, doge, etn, bch, eos, iota, zcash }
