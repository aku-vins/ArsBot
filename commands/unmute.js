const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let guild = message.guild;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  let reason = args
  message.delete(1000);
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply(":lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`").catch(console.error);
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(":lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`").catch(console.error);
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find("name", "muted");
  if(message.mentions.users.size < 1) return message.reply("You need to mention someone to unmute him!.");
  message.guild.member(user).removeRole(muteRole).then(() =>{
    message.channel.send(`You\'ve succesfully unmuted ${user}`);
  });
};
module.exports.help = {
  name: "unmute"
}