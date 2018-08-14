const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Bitte den Waffennamen dahinter schreiben - benutze **${settings.prefix}help waffennamen** fuer mehr Infos!`);
        return;
    }

    const search = args.splice(0, args.length).join(" ").toLowerCase()
    if (search == "liste") {
        message.channel.send("", {
            "embed": {
                "title": "**Material Liste**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Material Liste"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "description": "- Eisenerz \n- Eisenbarren \n - Sand \n - Glas \n - Kautschuk \n - Plastik \n - Zinkkohle \n - Bronzebarren \n - Batterien"
            }
        }).catch(console.error)
    }
    if (search == "hangaround") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: Hangaround Kleidung**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Hangaround Kleidung"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Kleidungsname",
                        "value": "not defined",
                        "inline": true
                    },
                    {
                        "name": "Beschreibung",
                        "value": "Offene ärmellose Lederjacke.",
                        "inline": true
                    },
                    {
                        "name": "Shop",
                        "value": "Discount Store 3",
                        "inline": true
                    }
                ],
                "image": {
                    "url": "http://krauts.org/lost/files/img/kutten/hangaround.png"
                }
            }
        }).catch(console.error)
    }
    if (search == "prospect") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: Prospect Kleidung**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Prospect Kleidung"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Kleidungsname",
                        "value": "not defined",
                        "inline": true
                    },
                    {
                        "name": "Beschreibung",
                        "value": "Zugeknöpfte ärmellose Weste ohne Patches",
                        "inline": true
                    },
                    {
                        "name": "Shop",
                        "value": "Suburban 4",
                        "inline": true
                    }
                ],
                "image": {
                    "url": "http://krauts.org/lost/files/img/kutten/prospect.png"
                }
            }
        }).catch(console.error)
    }
    if (search == "patchmember") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: Patchmember Kleidung**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Patchmember Kleidung"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Kleidungsname",
                        "value": "not defined",
                        "inline": true
                    },
                    {
                        "name": "Beschreibung",
                        "value": "Zugeknöpfte ärmellose Weste ohne Patches.",
                        "inline": true
                    },
                    {
                        "name": "Shop",
                        "value": "Discount Store 3",
                        "inline": true
                    }
                ],
                "image": {
                    "url": "http://krauts.org/lost/files/img/kutten/patchmember.png"
                }
            }
        }).catch(console.error)
    }
    if (search == "member") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: Member Kleidung**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Member Kleidung"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Kleidungsname",
                        "value": "not defined",
                        "inline": true
                    },
                    {
                        "name": "Beschreibung",
                        "value": "Zugeknöpfte, ärmellose und verwaschene Lederweste/ -jacke mit Patches.",
                        "inline": true
                    },
                    {
                        "name": "Shop",
                        "value": "Suburban 3",
                        "inline": true
                    }
                ],
                "image": {
                    "url": "http://krauts.org/lost/files/img/kutten/member.png"
                }
            }
        }).catch(console.error)
    }
    if (search == "secretary") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: Rat Kleidung**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Rat Kleidung"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "fields": [
                    {
                        "name": "Kleidungsname",
                        "value": "not defined",
                        "inline": true
                    },
                    {
                        "name": "Beschreibung",
                        "value": "Zugeknöpfte, ärmellose und neuere Lederweste/ -jacke mit Patches.",
                        "inline": true
                    },
                    {
                        "name": "Shop",
                        "value": "Suburban 2",
                        "inline": true
                    }
                ],
                "image": {
                    "url": "http://krauts.org/lost/files/img/kutten/rat.png"
                }
            }
        }).catch(console.error)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["materalien", "material", "m"],
    permLevel: 0
};

exports.help = {
    name: "material",
    description: "Zeigt die materialien mit Dauer und Ort an.",
    usage: "material"
};