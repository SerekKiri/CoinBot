const Discord = require('discord.js')

const coin = (message) => {
    const embed = new Discord.RichEmbed()
        .setTitle('Available coins price:')
        .setColor(0xC6FF00)
        .setDescription(`
- !btc      (BitCoin)
- !eth      (Ethereum)
- !ltc       (LiteCoin)
- !btg      (BitCoin Gold)
- !dash   (DASH)
- !game  (GAME)
- !xmr     (Monero)
- !xrp      (Ripple)
- !lsk       (Lisk)
- !mag    (Magnet)
- !doge   (DogeCoin)
- !bch     (BitCoin cash)
- !etn      (Electroneum)
- !eos      (EOS)
- !iota     (IOTA)
- !zcash  (ZEC)
- !sbd      (Steem Dollars)
- !steem (STEEM)
      `)
    message.channel.send({ embed }) 
}

module.exports = coin