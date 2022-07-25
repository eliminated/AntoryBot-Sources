const { EmbedBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: {
        name: `accept-button`,
    },
    async execute(interaction, client) {
        console.log(`${interaction.user.username} has clicked the accept button`);
        const modal = new ModalBuilder()
            .setCustomId(`accept-verification`)
            .setTitle('Please verify your account');

        const textinput = new TextInputBuilder()
            .setCustomId('verification')
            .setLabel('Verify')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Type: "I agreed to server rules and discord TOS"');

        modal.addComponents(new ActionRowBuilder().addComponents(textinput));

        await interaction.showModal(modal);
    }
}