
require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

const ping = require("./commands/message/ping");

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.generateInvite(['ADMINISTRATOR']).then(link => {
        console.log(link);
    })
});


bot.on('message', async message => {
    if (!message.guild || !message.content.startsWith(process.env.PREXIF)) {
        return;
    }

    if (message.content.startsWith(`${process.env.PREXIF}ping`)) {
        ping.execute(message);
    }
});

bot.login(process.env.DISCORD_TOKEN).then();
