exports.run = (client, message, args) => {
    if(args == "all"){
      const commandNames = Array.from(client.commands.keys());
      message.channel.send(`Lade alle Befehle neu...`).then(m => {
        for (let index = 0; index < commandNames.length; index++) {
          client.reload(commandNames[index])
        }
        m.edit("Alle Befehle wurden erfolgreich neu geladen!");
      })
      return;
    }

    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`Command: ${args[0]} not found. Please double check spelling!`);
    } else {
      message.channel.send(`Reloading: ${command}`)
        .then(m => {
          client.reload(command)
            .then(() => {
              m.edit(`Successfully reloaded: ${command}`);
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'neuladen',
    description: 'Reloads a command file, if it\'s been updated or modified',
    usage: 'neuladen [command]'
  };