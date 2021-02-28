
require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.generateInvite(['ADMINISTRATOR']).then(link => {
        console.log(link);
    })
});

bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong').then();
    }
});

bot.login(process.env.DISCORD_TOKEN).then();
