const TurndownService = require('turndown');
const debug = require('debug')('coins');

const turndownService = new TurndownService();

const coin = async (message) => {
  try {
    const embed = {
      title: 'Available coins price:',
      description: `
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
- !steem (STEEM)`,
      color: 0xC6FF00,
      footer: {
        icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
        text: 'Coin bot by Kiritito, Mickson & takidelfin',
      },
      author: {
        name: 'Coin bot',
        url: 'https://github.com/quritto/coin_bot',
        icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
      },
      fields: [
        {
          name: "You don't see your favourite coin?",
          value: turndownService.turndown('Write your coin in issue here:</br><a href="https://github.com/quritto/coin_bot/issues">Github.com</a></br>'),
        },
      ],
    };
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = coin;
