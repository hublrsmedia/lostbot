const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Bitte den Rang dahinter schreiben - benutze **${settings.prefix}help kutten** fuer mehr Infos!`);
        return;
    }

    const search = args.splice(0, args.length).join(" ").toLowerCase()
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
    if (search == "member" || search == "tailgunner" || search == "asskicker" || search == "seniormember" || search == "membermanager" || search == "executioner" || search == "instructor" || search == "brother" || search == "brotheratarms") {
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
    if (search == "secretary" || search == "roadcaptain" || search == "roadcpt" || search == "seargentatarms" || search == "sgt" || search == "sgtatarms" || search == "vize" || search == "vizepresident" || search == "president" || search == "presi" || search == "rat") {
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
    aliases: ["kutten", "k"],
    permLevel: 0
};

exports.help = {
    name: "kutten",
    description: "Zeigt die Kutten mit Rangangabe und Fundort an.",
    usage: "kutten"
};