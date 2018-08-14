const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    const api = settings.api.url
    let apifull = api + "funk.json"
    
    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            return message.channel.send(`Funk nicht gefunden.`);;
        }
                     
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC Funkfrequenzen**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "Offizielle Funkfrequenzen des LOST MCs"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Offizieller Lost Funk",
                        "value": `${body.info.funk.lost_encoded}`,
                        "inline": false
                    },
                    {
                        "name": "Inoffizieller Ausweich Funk",
                        "value": `${body.info.funk.lost_ausweich}`,
                        "inline": false
                    },
                    {
                        "name": "Ersatzfunk",
                        "value": `${body.info.funk.lost_friends_one}`,
                        "inline": true
                    },
                    {
                        "name": "Ersatzfunk",
                        "value": `${body.info.funk.lost_friends_two}`,
                        "inline": true
                    }
                ]
            }
        }).catch(console.error)

    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["funk", "f"],
    permLevel: 0
};

exports.help = {
    name: "funk",
    description: "Zeigt die derzeitigen Funkfrequenzen des Lost MC",
    usage: "funk"
};