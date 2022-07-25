const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gets your internet connection speed.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply();

        let embed  = new EmbedBuilder()

        const send = `API Latency: ${client.ws.ping}ms\nClient ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`;
        let rndbeautifulcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        embed.setDescription(send);
        embed.setColor(rndbeautifulcolor);

        await interaction.editReply({
            embeds: [embed]
        });
    }
}