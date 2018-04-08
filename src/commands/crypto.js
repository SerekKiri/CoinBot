const axios = require('axios')

const btc = async (message) => {
  const btcQuery = await axios.get('https://bitbay.net/API/Public/BTCPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`BTC: ${btcQuery.data.bid} PLN`)
}

const eth = async (message) => {
  const ethQuery = await axios.get('https://bitbay.net/API/Public/ETHPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`ETH: ${ethQuery.data.bid} PLN`)
}

const ltc = async (message) => {
  const ltcQuery = await axios.get('https://bitbay.net/API/Public/LTCPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`LTC: ${ltcQuery.data.bid} PLN`)
}

const bcc = async (message) => {
  const bccQuery = await axios.get('https://bitbay.net/API/Public/BCCPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`BCC: ${bccQuery.data.bid} PLN`)
}

const lsk = async (message) => {
  const lskQuery = await axios.get('https://bitbay.net/API/Public/LSKPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`LSK: ${lskQuery.data.bid} PLN`)
}

const game = async (message) => {
  const gameQuery = await axios.get('https://bitbay.net/API/Public/GAMEPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`GAME: ${gameQuery.data.bid} PLN`)
}

const dash = async (message) => {
  const dashQuery = await axios.get('https://bitbay.net/API/Public/DASHPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`DASH: ${dashQuery.data.bid} PLN`)
}

const btg = async (message) => {
  const btgQuery = await axios.get('https://bitbay.net/API/Public/BTGPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`BTG: ${btgQuery.data.bid} PLN`)
}

const kzc = async (message) => {
  const kzcQuery = await axios.get('https://bitbay.net/API/Public/KZCPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`KZC: ${kzcQuery.data.bid} PLN`)
}

const xin = async (message) => {
  const xinQuery = await axios.get('https://bitbay.net/API/Public/XINPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`XIN: ${xinQuery.data.bid} PLN`)
}

const xrp = async (message) => {
  const xrpQuery = await axios.get('https://bitbay.net/API/Public/XRPPLN/ticker.json').catch(err => message.reply(err))
  await message.reply(`XRP: ${xrpQuery.data.bid} PLN`)
}


module.exports = { btc, eth, ltc, bcc, lsk, game, dash, btg, kzc, xin, xrp }
