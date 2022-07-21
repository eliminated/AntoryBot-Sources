// This is discordjs v14.3.0
// All codes from v13 are probably outdated

const d = require('discord.js');
require('dotenv').config();
const { Client, GatewayIntentBits, InteractionType, Collection } = require('discord.js');
const { readdirSync } = require('fs');

// Create new client instance

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.commandArray = [];

const handlersFile = readdirSync('./src/handlers/').filter(file => file.endsWith('.js'));
for (const file of handlersFile) {
    require(`./src/handlers/${file}`)(client);
}

client.commandHandler();
client.eventHandler();

// Login to Discord with your app's token
client.login(process.env.TOKEN);