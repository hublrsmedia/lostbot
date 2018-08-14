const settings = require('../settings.json');
const discord = require("discord.js");
const pm2 = require('pm2')
const moment = require('moment')
require("moment-duration-format");
exports.run = (client, message, params) => {

  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed = new discord.RichEmbed()
  .setTitle("Offizieller AOD MC Bot")
  .addField("Versionen", `**Bot:** 1.0.0\n**Discord.js:** ${discord.version}\n**Nodejs:** ${process.version}`, true)
  .addField("Statistik", `**Betriebszeit:** ${duration}\n**Speicher:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\n**Benutzer:** ${client.users.size.toLocaleString()}\n**Server:** ${client.guilds.size.toLocaleString()}`, true)
  .addField("Bot Entwickler", `Erwin Fuchs\n[fuchsi#2453](https://hublrsmedia.de/)`)

  message.channel.send("", {
    embed: embed
}).catch(console.error)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botinfo',
  description: `Displays this bot's Stats and Information`,
  usage: 'botinfo'
};