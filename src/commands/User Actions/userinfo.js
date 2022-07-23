const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Gets information about a user.')
        .addUserOption(option => option.setName('target').setDescription('The user to get information about.').setRequired(true)),
    async execute(interaction, client) {
        const tuser = interaction.options.getUser('target');
        const findUser = client.users.cache.find(user => user.id === tuser.id);
        if(!findUser) return interaction.reply({
            content: `Could not find user ${tuser.username}!`,
            ephemeral: true,
        });

        const serverGuild_logo = interaction.guild.iconURL({ format: 'png', dynamic: true, size: 512 });
        const guildName = interaction.guild.name;
        let roles = interaction.member.roles.cache.filter(role => role.name !== '@everyone').map(role => role.name);
        const embed = new EmbedBuilder()
            .setTitle(`${findUser.username}#${findUser.discriminator}`)
            .setThumbnail(findUser.avatarURL())
            .setColor(0x18e1ee)
            .setAuthor({
                url: `${findUser.avatarURL()}`,
                iconURL: `${findUser.avatarURL()}`,
                name: `${findUser.username}#${findUser.discriminator}`,
            })
            .setFooter({
                text: `Requested: ${interaction.author}`,
            })
            .addFields([
                {
                    name: 'ID',
                    value: `${findUser.id}`,
                    inline: true,
                },
                {
                    name: 'Date Created',
                    value: `${findUser.createdAt}`,
                },
                {
                    name: 'Role(s)',
                    value: `${roles}`,
                    inline: true,
                },
            ])
            .setTimestamp(Date.now());

        await interaction.reply({
            embeds: [embed],
            content: "[**This command will be deprecated in the future. Please use '/info user' instead.**]",
        });
    }
}