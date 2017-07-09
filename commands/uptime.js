//By Amit Katz, Uptime Command!
exports.run = (client, message) => {
  const Discord = require ("discord.js");
  var ms = client.uptime,
    cd = 24 * 60 * 60 * 1000, // calc days
    ch = 60 * 60 * 1000, // calc hours
    cm = 60 * 1000, // calc minutes
    cs = 1000, // calc seconds
    days = Math.floor(ms / cd),
    dms = days * cd, //days, in ms
    hours = Math.floor((ms - dms) / ch),
    hms = hours * ch, //hours, in ms
    minutes = Math.floor((ms - dms - hms) / cm),
    mms = minutes * cm, //minutes, in ms
    seconds = Math.round((ms - dms - hms - mms) / cs);
  if (seconds == 60) {
    minutes++; // increase by 1
    seconds = 0;
  }
  if (minutes == 60) {
    hours++; // inc by 1
    minutes = 0;
  }
  if (hours == 24) {
    days++; // increase by 1
    hours = 0;
  }
  var dateStrings = [];

  if (days === 1) dateStrings.push("**1** day");
  else if (days > 1) dateStrings.push("**" + String(days) + "** days");

  if (hours === 1) dateStrings.push("**1** hour");
  else if (hours > 1) dateStrings.push("**" + String(hours) + "** hours");

  if (minutes === 1) dateStrings.push("**1** minute");
  else if (minutes > 1) dateStrings.push("**" + String(minutes) + "** minutes");

  if (seconds === 1) dateStrings.push("**1** second");
  else if (seconds > 1) dateStrings.push("**" + String(seconds) + "** seconds");

  var dateString = "";
  for (var i = 0; i < dateStrings.length - 1; i++) {
    dateString += dateStrings[i];
    dateString += ", ";
  }
  if(dateStrings.length >= 2) {
    dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
    dateString += "and ";
  }
  dateString += dateStrings[dateStrings.length - 1];
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setThumbnail(message.author.iconURL)
  .addField(":clock: uptime", "Bot's uptime", true)
  .addField(":runner: Running on:", `**${client.guilds.size}** servers`, true)
  .addField(":white_check_mark: Active for:", dateString, true)
  .setColor(6583245);
  message.channel.send({embed})
  .catch(console.error)
};
module.exports.help = {
  name: "uptime"
}