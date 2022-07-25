const { InteractionType, SelectMenuInteraction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {

            try {
                const { commands } = client;
                const { commandName } = interaction;
                const command = commands.get(commandName);
                if (!command) return;

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

        } else if (interaction.isButton()) {
            const { buttons } = client;
            const { customId } = interaction;
            const button = buttons.get(customId);
            if (!button) return new Error('There is no code/file for this button. Recommended to create a new one.');

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.isSelectMenu()) {
            const { selectMenus } = client;
            const { customId } = interaction;
            const menu = selectMenus.get(customId);
            if(!menu) return new Error('There is no code/file for this select menu. Recommended to create a new one.');

            try {
                await menu.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.type === InteractionType.ModalSubmit) {
            const { modals } = client;
            const { customId } = interaction;
            const modal = modals.get(customId);
            if(!modal) return new Error('There is no code/file for this modal. Recommended to create a new one.');

            try {
                await modal.execute(interaction, client);
            } catch (error) {
                console.error(error);
            }
        }



    },
};