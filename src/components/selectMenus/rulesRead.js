const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: {
        name: `rule-selector`,
    },
    async execute(interaction, client) {
        console.log(`${interaction.user.username} has read the rules and choosed ${interaction.values[0]}`);
        if(interaction.values[0] === 'text-channel-rules'){
            let ruleEmbed = new EmbedBuilder()
                .setTitle('Text Channel Rules')
                .setDescription('__**Text Channel is a channel that is used to communicate with other users.**__\n\n**1.** No spamming.\n**2.** Advertising discord server is prohibited.\n**3.** No profanity.\n**4.** No NSFW content.\n**5.** No threats.\n**6.** No impersonation.')
                .setColor('Random')
                .setFooter({ text: 'Discord ToS are subject to change without notice.' })
                .setTimestamp(Date.now());
            await interaction.reply({
                embeds: [ruleEmbed],
                ephemeral: true,
            });
        }
        else if (interaction.values[0] === 'voice-channel-rules'){
            let ruleEmbed = new EmbedBuilder()
                .setTitle('Voice Channel Rules')
                .setDescription('__**Voice Channel is a channel that is used to communicate with other users.**__\n\n**1.**No background noises like eerie noises, earrape etc.\n**2**.Playing musics are allowed, but think about the others, they\'ve might want to listen to their own music.\n**3**.Video streaming is allowed, but min cooldown is 3 hours to avoid internet speed jamming and abuses.\n**4**.No NSFW content.\n**5**.No threats.\n**6**.No impersonation.')
                .setColor('Random')
                .setFooter({ text: 'Discord ToS are subject to change without notice.' })
                .setTimestamp(Date.now());
            await interaction.reply({
                embeds: [ruleEmbed],
                ephemeral: true,
            });
        }
        else if (interaction.values[0] === 'server-communication-rules'){
            let ruleEmbed = new EmbedBuilder()
                .setTitle('Server Communication Rules')
                .setDescription('__**Server Communication is a channel that is used to communicate with other users.**__\n\n**1**. Be respectful to other members because they are a happy smiley face!\n**2**. Please be respectful to the member who has authority to take actions against you (Like: Admins, Moderators, etc.)\n**3**. Sending death threats/insults or harrasments is highly prohibited (is likely to get banned for 3 strikes).\n**4**. As usual, no impersonation agaist people who you hated the most.')
                .setColor('Random')
                .setFooter({ text: 'Discord ToS are subject to change without notice.' })
                .setTimestamp(Date.now());
            await interaction.reply({
                embeds: [ruleEmbed],
                ephemeral: true,
            });
        }
    }
}