const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets avatar url of a user.')
        .addUserOption(option => option.setName('target').setDescription('The user to get the avatar url of.').setRequired(false)),

    async execute(interaction, client) {
        // Determine if user used command with mentions, if so, get the first user, if not, get the author icon url
        if(interaction.options.getUser('target')) {
            const targetUser = interaction.options.getUser('target');
            const avatarUrl = targetUser.avatarURL({ format: 'png', dynamic: true, size: 1024 });
            await interaction.reply({
                content: `${targetUser.username}'s avatar url is ${avatarUrl}`,
            });
        } else {
            await interaction.reply({
                content: `${interaction.user.username}'s avatar url is ${interaction.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })}`,
            });
        }
    }
}