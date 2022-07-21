const { readdirSync } = require('fs');

module.exports = (client) => {
    client.eventHandler = async () => {
        const eventFolders = readdirSync('./src/events');
        for (const folder of eventFolders) {
            const eventFiles = readdirSync(`./src/events/${folder}`).filter(file => file.endsWith('.js'));

            switch (folder) {
                case "client":
                    for (const file of eventFiles) {
                        const event = require(`../events/${folder}/${file}`);
                        if(event.once) client.once(event.name, (...args) => event.execute(client, ...args));
                        else client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}