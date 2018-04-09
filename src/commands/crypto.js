const axios = require('axios')

const btc = async (message) => {
  try {
    const btcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=PLN')
    await message.reply(`BTC: ${btcQuery.data[0].price_pln} PLN, ${btcQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const eth = async (message) => {
  try {
    const ethQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=PLN')
    await message.reply(`ETH: ${ethQuery.data[0].price_pln} PLN, ${ethQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}


const ltc = async (message) => {
  try {
    const ltcQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    await message.reply(`LTC: ${ltcQuery.data[0].price_pln} PLN, ${ltcQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const bcc = async (message) => {
  try {
    const bccQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/bitconnect/?convert=PLN')
    await message.reply(`BCC: ${bccQuery.data[0].price_pln} PLN, ${bccQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const lsk = async (message) => {
  try {
    const lskQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/lisk/?convert=PLN')
    await message.reply(`LSK: ${lskQuery.data[0].price_pln} PLN, ${lskQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const game = async (message) => {
  try {
    const gameQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/game/?convert=PLN')
    await message.reply(`game: ${gameQuery.data[0].price_pln} PLN, ${gameQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const dash = async (message) => {
  try {
    const dashQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/dash/?convert=PLN')
    await message.reply(`DASH: ${dashQuery.data[0].price_pln} PLN, ${dashQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const btg = async (message) => {
  try {
    const btgQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=PLN')
    await message.reply(`BTG: ${btgQuery.data[0].price_pln} PLN, ${btgQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const xmr = async (message) => {
  try {
    const xmrQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/monero/?convert=PLN')
    await message.reply(`XMR: ${xmrQuery.data[0].price_pln} PLN, ${xmrQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

const xrp = async (message) => {
  try {
    const xrpQuery = await axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/?convert=PLN')
    await message.reply(`XRP: ${xrpQuery.data[0].price_pln} PLN, ${xrpQuery.data[0].price_usd} USD`)
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { btc, eth, ltc, bcc, lsk, game, dash, btg, xmr, xrp }
