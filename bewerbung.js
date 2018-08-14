const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');
const moment = require('moment');
const log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Bitte eine URL dahinter schreiben - benutze **${settings.prefix}help bewerbung** fuer mehr Infos!`);
        return;
    }


    const url = args.toString().replace(/,/g, ' ')
    message.channel.bulkDelete(1)
        .catch(console.error);
    message.channel.send("@everyone \n");
    message.channel.send("", {
        "embed": {
            "title": "**Bewerbung**",
            "description": "Es liegt eine neue Bewerbung vor:\n [Hier klicken zum Öffnen](" + url +") ",
            "color": 2484088,
            "footer": {
                "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                "text": "Neue Bewerbung"
            },
            "thumbnail": {
                "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
            }
        }
    }).catch(console.error)
        .then(function (message) {
            message.react("✅")
            message.react("🔁")
            message.react("❌")
            log("Eine Bewerbung wurde gepostet.")
        });
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bewerbung", "b"],
    permLevel: 0
};

exports.help = {
    name: "bewerbung",
    description: "Postet eine Bewerbung",
    usage: "bewerbung"
};