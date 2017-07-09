const Discord = require('discord.js');

const cooldown = new Set();
exports.run = function (client, message) {
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('**[COOLDOWN]** Info command has **5 Minutes** Cooldown!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    const fetch = require('snekfetch');
    fetch.get('https://random.cat/meow').then(cat => {
        const embed = new Discord.RichEmbed()
    .setImage(`${cat.body.file}`);
        message.channel.send({embed}).catch(console.error);
    }).catch(err => {
        if (err) {
            message.channel.send('OOPS something went wrong...');
        }
    });
};
module.exports.help = {
    name: 'cat'
};
