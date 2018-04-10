const Discord = require('discord.js')

const coin = (message) => {
    const embed = new Discord.RichEmbed()
        .setTitle('Available coins price:')
        .setColor(0xF44336)
        .setDescription(`
- !btc     (BitCoin)
- !eth     (Ethereum)
- !ltc      (LiteCoin)
- !btg     (BitCoin Gold)
- !dash  (DASH)
- !game (GAME)
- !xmr    (Monero)
- !xrp     (Ripple)
- !bcc     (BitConnect)
- !lsk      (Lisk)
- !mag   (Magnet)
- !doge  (DogeCoin)
- !bch    (BitCoin cash)
- !etn     (Electroneum)
- !eos     (EOS)
      `)
    message.channel.send({ embed })
}

module.exports = coin