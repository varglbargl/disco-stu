const Discord = require('discord.js');
const bot = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

const utils = require('./utils.js');

bot.login(process.env.TOKEN);

// console.log('Bot token is: ' + process.env.TOKEN);

bot.on('message', (message) => {
  if (message.channel.type == 'dm') {
    let replyText = utils.randomResponse([
      'please do not dm me at this time.',
      'please leave.',
      'please do not speak to me or my hotdog ever again.'
    ]);
    message.reply(replyText);

  } else if (message.content) {
    interperetMessage(message, message.content);
  }
});

var interperetMessage = (message, text) => {
  if (text == 'testing') {
    message.channel.send('Hello spiders!');
  }
};
