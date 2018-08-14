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
                "title": "**Waffenliste**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: Waffenliste"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "description": "- CombatPDW\n- SMG\n- Pumpshotgun\n- SawedoffShotgun\n- DoubleBarrelShotgun\n- Bullpupshotgun\n- HeavyShotgun\n- Assaultshotgun\n- AdavancedRifle\n- Carbinerifle\n- Assaultrifle\n- Bullpuprifle\n- Compactrifle\n- Gusenberg\n- Sniper"
            }
        }).catch(console.error)
    }
    if (search == "combatpdw") {
        message.channel.send("", {
            "embed": {
                "title": "**The Lost MC: CombatPDW**",
                "color": 000000,
                "footer": {
                    "icon_url": "http://krauts.org/lost/files/img/lostmc-logo.png",
                    "text": "The Lost MC: CombatPDW"
                },
                "thumbnail": {
                    "url": "http://krauts.org/lost/files/img/lostmc-logo.png"
                },
                "description": "**Herstellungsdauer:** 12 Stunden\n**Materialien:** xxx",
                "image": {
                    "url": "http://krauts.org/lost/files/img/waffen/combatpdw.png"
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
    aliases: ["waffen", "w"],
    permLevel: 0
};

exports.help = {
    name: "waffen",
    description: "Zeigt die Waffen mit Materialien und Dauer an.",
    usage: "waffen"
};