const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } =require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Sends a random link from the YouTube.'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('ytlink')
            .setLabel('Click Me, something cool will happen!')
            .setStyle(ButtonStyle.Danger);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}