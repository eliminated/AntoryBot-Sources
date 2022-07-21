const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gets your internet connection speed.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const send = `API Latency: ${client.ws.ping}ms\nClient ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`;

        await interaction.editReply({
            content: send,
        });
    }
}