// This is discordjs v14.3.0
// All codes from v13 are probably outdated

const d = require('discord.js');
require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const {readdirSync} = require('fs');

// Create new client instance

const client = new Client({
    intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel]       // This is v14 only
});

// When the client is ready, run this code (only onces)
client.once('ready', () => {
    console.log('\'ready\' () => {');
});

// Login to Discord with your app's token
client.login(process.env.TOKEN);