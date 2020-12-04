const Discord = require('discord.js');
const client = new Discord.Client();

client.login('process.env.TOKEN');

client.on('ready', readyDiscord);

client.on('message', gotMessage);

function readyDiscord() {
    console.log('up and running');
}

function gotMessage(msg) {
    console.log(msg);
    if (msg.channel.type === 'text') {
        if (msg.author.bot && msg.author.username !== 'GetStartedApp') {
            msg.reply('I was taught not to talk to strangers');
        } else {
            if (msg.content.toLowerCase().startsWith('hello')) {
                msg.reply('hello back');
            }
        }
    }
}
