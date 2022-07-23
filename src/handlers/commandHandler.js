const { readdirSync } = require('fs');
const { Routes } = require('discord-api-types/v10');
const { REST } = require('@discordjs/rest');
const ascii = require('ascii-table');
const table = new ascii('Command Handler');
table.setHeading('Command', 'Description', 'Status');

module.exports = (client) => {
    client.commandHandler = async () => {
        const commandFolders = readdirSync('./src/commands/');
        for (const folder of commandFolders) {
            const commandFiles = readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                table.addRow(command.data.name, command.data.description, '✅');
            }
        }
        console.log(table.toString());

        const { clientId } = require('../../configs.json');
        const { guildId } = require('../../configs.json');
        const rest = new REST({ version: '9'}).setToken(process.env.TOKEN);
        try {
            console.log('Started refreshing application (/) commands...');

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body: client.commandArray,
            });

            console.log('Application (/) commands reloaded.');
        } catch (error) {
            console.error(error);
        }
    }
};