const Discord = require('discord.js');
const debug = require('debug')('coins')

const coin = async (message) => {
    try {
        const embed = new Discord.RichEmbed()
            .setTitle('Available coins price:')
            .setColor(0xC6FF00)
            .setDescription(`
    - !btc      (BitCoin)
    - !eth      (Ethereum)
    - !ltc       (LiteCoin)
    - !btg      (BitCoin Gold)
    - !dash   (DASH)
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
    - !steem (STEEM)`);
        await message.channel.send({ embed });
    } catch (err) {
        debug(err);
    }
};

module.exports = coin;
