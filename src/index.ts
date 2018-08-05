import discordJs from 'discord.js';
import debug from 'debug';
debug('index');
import configJson from './config.json';
import crypto from './commands/crypto';
import coins from './commands/coins';
import help from './commands/help';
import donate from './commands/donate';
import github from './commands/github';
// const token = require('./src/token.json');

const client = new discordJs.Client();

client.login(process.env.BOT_TOKEN);

// client.login(token.token);

client.on('ready', () => {
  debug(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // @ts-ignore
  client.user.setPresence({ game: { name: 'for currencies changes', type: 3 } });
});

client.on('message', async (message) => {
  if (message.content.substring(0, configJson.prefix.length) === configJson.prefix) {
    const command = message.content.slice(configJson.prefix.length);

    switch (command) {
      case 'coins':
        coins(message);
        break;
      case 'help':
        help(message);
        break;
      case 'donate':
        donate(message);
        break;
      case 'github':
        github(message);
        break;
      default:
        crypto(message, command);
    }
  }
});
