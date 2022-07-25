module.exports = {
    data: {
        name: `accept-verification`,
    },
    async execute(interaction, client) {
        if(interaction.fields.getTextInputValue('verification') === 'I agreed to server rules and discord TOS') {
            await interaction.reply({ content: 'Verified!', ephemeral: true });

        } else {
            await interaction.reply({ content: 'Verification failed!', ephemeral: true });
        }
    }
}