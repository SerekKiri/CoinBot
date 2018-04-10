const Discord = require('discord.js')
const axios = require('axios')

var currentdate = new Date();
var datetime = "Price at " + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":"
  + currentdate.getSeconds() + " "
  + currentdate.getDate() + "/"
  + (currentdate.getMonth() + 1) + "/"
  + currentdate.getFullYear();

const btc = async (message) => {
  try {
    const btcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[BTC] BitCoin price:')
      .setColor(0x009688)
      .setDescription(` - ${btcQuery.data[0].price_usd} USD
- ${btcQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const eth = async (message) => {
  try {
    const ethQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[ETH] Ethereum price:')
      .setColor(0x009688)
      .setDescription(` - ${ethQuery.data[0].price_usd} USD
- ${ethQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}


const ltc = async (message) => {
  try {
    const ltcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[LTC] LiteCoin price:')
      .setColor(0x009688)
      .setDescription(` - ${ltcQuery.data[0].price_usd} USD
- ${ltcQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const bcc = async (message) => {
  try {
    const bccQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitconnect/?convert=PLN')
    const embed = new Discord.RichEmbed()
    .setTitle('[BCC] BitConnect price:')
    .setColor(0x009688)
    .setDescription(` - ${bccQuery.data[0].price_usd} USD
- ${bccQuery.data[0].price_pln} PLN`)
    .setFooter(datetime)
  await message.channel.send({ embed })
}
catch (err) {
  console.log(err)
}
}

const lsk = async (message) => {
  try {
    const lskQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/lisk/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[LSK] Lisk price:')
      .setColor(0x009688)
      .setDescription(` - ${lskQuery.data[0].price_usd} USD
- ${lskQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const game = async (message) => {
  try {
    const gameQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/game/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[GAME] GAME price:')
      .setColor(0x009688)
      .setDescription(` - ${gameQuery.data[0].price_usd} USD
- ${gameQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const dash = async (message) => {
  try {
    const dashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dash/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[DASH] DASH price:')
      .setColor(0x009688)
      .setDescription(` - ${dashQuery.data[0].price_usd} USD
- ${dashQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const btg = async (message) => {
  try {
    const btgQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[BTG] Bitcoin Gold price:')
      .setColor(0x009688)
      .setDescription(` - ${btgQuery.data[0].price_usd} USD
- ${btgQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const xmr = async (message) => {
  try {
    const xmrQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/monero/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[XMR] Monero price:')
      .setColor(0x009688)
      .setDescription(` - ${xmrQuery.data[0].price_usd} USD
- ${xmrQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const xrp = async (message) => {
  try {
    const xrpQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[XRP] Ripple price:')
      .setColor(0x009688)
      .setDescription(` - ${xrpQuery.data[0].price_usd} USD
- ${xrpQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const mag = async (message) => {
  try {
    const magQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/magnet/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[MAG] Magnet price:')
      .setColor(0x009688)
      .setDescription(` - ${magQuery.data[0].price_usd} USD
- ${magQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const doge = async (message) => {
  try {
    const dogeQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dogecoin/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[DOGE] DogeCoin price:')
      .setColor(0x009688)
      .setDescription(` - ${dogeQuery.data[0].price_usd} USD
- ${dogeQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const etn = async (message) => {
  try {
    const etnQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/electroneum/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[ETN] Electroneum price:')
      .setColor(0x009688)
      .setDescription(` - ${etnQuery.data[0].price_usd} USD
- ${etnQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const bch = async (message) => {
  try {
    const bchQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[BCH] BitCoin Cash price:')
      .setColor(0x009688)
      .setDescription(` - ${bchQuery.data[0].price_usd} USD
- ${bchQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

const eos = async (message) => {
  try {
    const eosQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/eos/?convert=PLN')
    const embed = new Discord.RichEmbed()
      .setTitle('[EOS] EOS price:')
      .setColor(0x009688)
      .setDescription(` - ${eosQuery.data[0].price_usd} USD
- ${eosQuery.data[0].price_pln} PLN`)
      .setFooter(datetime)
    await message.channel.send({ embed })
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { btc, eth, ltc, bcc, lsk, game, dash, btg, xmr, xrp, mag, doge, etn, bch, eos }
