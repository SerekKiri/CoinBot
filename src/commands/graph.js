// const Discord = require('discord.js');
const axios = require('axios');
const debug = require('debug')('graph');
const plotly = require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_APIKEY);

const coinIDs = require('../coinIDs.json');

const graphCreator = async (message, command) => {
  try {
    const coinName = command.replace('graph ', '');
    const coinID = coinIDs.coincapio[coinName];
    const query = await axios.get(`http://coincap.io/history/90day/${coinID}`);
    const data = {
      x: [],
      y: [],
      type: 'scatter'
    };
    Object.keys(query.data.price).forEach((key) => {
      data.x.push(query.data.price[key][0]);
      data.y.push(query.data.price[key][1]);
    });
    debug(data);
    plotly.plot(data);
    await message.channel.send(`${coinName} price in last 90 days:`);
  } catch (err) {
    debug(err);
  }
};

module.exports = graphCreator;
