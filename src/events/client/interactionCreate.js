const { InteractionType, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        

        try {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if(!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: `An error occurred while executing the command.`,
                    ephemeral: true,
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'An error occurred while processing your request.',
            });
        }
    },
};