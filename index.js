const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require("./config.json");


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(process.env.TOKEN);