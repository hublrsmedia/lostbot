const settings = require('../settings.json');
const discord = require("discord.js");

exports.run = (client, message, params) => {

const embed = new discord.RichEmbed()
  .setTitle("FuchsBot")
    .addField("Links", `**AOD Website:** (http://aod.krauts.org/)\n**Konzept Website:** (http://aodmc.krauts.org/)\n**PokeOne Download:** (https://drive.google.com/open?id=1L-ATpSvYoIXQ8bnIgn6S19yKp-OHmEFm)`, true)


  message.channel.send("", {
    embed: embed
}).catch(console.error)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link','l'],
  permLevel: 0
};

exports.help = {
  name: 'links',
  description: 'Zeigt Informationen über wichtige Links!',
  usage: 'links'
};