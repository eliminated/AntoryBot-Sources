const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get information about user/server.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Get information about a user.')
                .addUserOption(option => option.setName('target').setDescription('The user to get information about.').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Get information about a server.')),
    async execute(interaction, client) {
        
        
        if (interaction.options.getSubcommand() === 'user') {
            const targetUser = interaction.options.getUser('target');
            let targetUserId = targetUser.id;
            // get specific user roles by using the user id
            const userRoles = interaction.guild.members.cache.get(targetUserId).roles.cache.map(role => role.name);
            let rndbeautifulcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            let embed = new EmbedBuilder()
                .setTitle('User Information')
                .setDescription(`Information about ${targetUser.username}#${targetUser.discriminator}`)
                .setThumbnail(targetUser.avatarURL())
                .setColor(rndbeautifulcolor)
                .setAuthor({
                    url: `${targetUser.avatarURL()}`,
                    iconURL: `${targetUser.avatarURL()}`,
                    name: `${targetUser.username}#${targetUser.discriminator}`,
                })
                .addFields([
                    {
                        name: 'ID',
                        value: `${targetUser.id}`,
                    },
                    {
                        name: 'Account Created',
                        value: `${targetUser.createdAt}`,
                    },
                    {
                        name: 'User Roles',
                        value: `${userRoles.join('\n')}`,
                    },
                    {
                        name: 'Nickname',
                        value: `${targetUser.nickname ? targetUser.nickname : 'None'}`,
                    },
                    {
                        name: 'User Type',
                        value: `${targetUser.bot ? 'Bot' : 'Human'}`,
                    }
                ])
                .setFooter({ text: `Requested: ${interaction.author}` })
                .setTimestamp(Date.now());

            await interaction.deferReply();
            await interaction.editReply({
                embeds: [embed],
            });
        }
        else if(interaction.options.getSubcommand() === 'server') {
            await interaction.reply({
                content: 'This command is still under development.',
                ephemeral: true,
            });

        }
    }
}