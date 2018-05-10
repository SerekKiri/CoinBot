const Discord = require('discord.js');
const debug = require('debug')('index');

const config = require('./src/config.json');
const crypto = require('./src/commands/crypto');
const graph = require('./src/commands/graph');
const coins = require('./src/commands/coins');
const help = require('./src/commands/help');

const client = new Discord.Client();

if (process.env.NODE_ENV === 'production' || process.env.BOT_TOKEN !== undefined) {
  client.login(process.env.BOT_TOKEN);
} else {
  client.login(config.token);
}

client.on('ready', () => {
  debug(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setPresence({ game: { name: 'Paying taxes the movie', type: 3 } });
});

client.on('message', async (message) => {
  const command = message.content.slice(config.prefix.length);

  switch (command) {
    case 'coins':
      coins(message);
      break;
    case 'help':
      help(message);
      break;
    case 'donate':
      try {
        await message.reply(`Thanks for all donates! :yum:
      Bitcoin wallet: 1B3GQWbhGSf3qFNKB3rzRF7eccBUYfEiKZ  
      Ethereum wallet: 0x511e3952faB38a8a7E1Da30c16671a947dBD43c0`);
      } catch (err) {
        debug(err);
      }
      break;
    default:
      if (command.startsWith('graph')) {
        graph(message, command);
      } else {
        crypto(message, command);
      }
  }
});
