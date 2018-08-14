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
                "title": "**Angels Of Death MC Funkfrequenzen**",
                "color": 4347562,
                "footer": {
                    "icon_url": "http://krauts.org/img/ic/logo-solo.png",
                    "text": "Funkfrequenzen erzeugt für Sonnenwende "  + `${body.info.sonnenwende}`
                },
                "thumbnail": {
                    "url": "http://krauts.org/img/ic/logo-solo.png"
                },
                "fields": [
                    {
                        "name": "Gruppenfunk",
                        "value": `${body.info.funk.aod}`,
                        "inline": false
                    },
                    {
                        "name": "Ersatzfunk",
                        "value": `${body.info.funk.aod_one}`,
                        "inline": true
                    },
                    {
                        "name": "Ersatzfunk",
                        "value": `${body.info.funk.aod_two}`,
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
    aliases: ["handy"],
    permLevel: 0
};

exports.help = {
    name: "handy",
    description: "Erklaert die Funktionen des Handys.",
    usage: "handy"
};