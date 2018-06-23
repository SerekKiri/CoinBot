const Discord = require('discord.js');
const debug = require('debug')('help');

const help = async (message) => {
  try {
    const embed = new Discord.RichEmbed()
      .setTitle('Available commands')
      .setColor(0x4c4cff)
      .setDescription(`
- !help
- !coins
- !github
- !donate (We are collecting for hosting)
        Legend:
                :clock1: - 1 hour
                :calendar: - 24 hours
                :calendar_spiral: - 7 days `);
    await message.channel.send({ embed });
  } catch (err) {
    debug(err);
  }
};

module.exports = help;
