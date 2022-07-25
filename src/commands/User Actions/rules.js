// const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js');
const {
    SlashCommandBuilder,
    EmbedBuilder,       // Originaly called MessageEmbed() in discord.js v13
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    SelectMenuBuilder,
    SelectMenuOptionBuilder
} = require('discord.js');      //  Shorter than one line.

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Read the rules then verify your account.'),
    async execute(interaction, client) {
        const ruleMenu = new SelectMenuBuilder()
            .setCustomId(`rule-selector`)
            .setMinValues(1)
            .setMaxValues(1)        // User can only select one option.
            .setOptions(new SelectMenuOptionBuilder({
                label: '🗒️Text Channel Rules',
                value: 'text-channel-rules',
            }), new SelectMenuOptionBuilder({
                label: '🔊Voice Channel Rules',
                value: 'voice-channel-rules',
            }), new SelectMenuOptionBuilder({
                label: '💬Server Communication Rules',
                value: 'server-communication-rules',
            }));

        const acceptButton = new ButtonBuilder()
            .setLabel('Accept')
            .setCustomId(`accept-button`)
            .setStyle(ButtonStyle.Success);

        let rndbeautifulcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let ruleEmbed = new EmbedBuilder()
            .setTitle('Server Terms and Conditions')
            .setDescription('Please read the rules, you can select rules option below and click \'Accept\' to accept the rules.')
            .setColor(rndbeautifulcolor)
            .setFooter({ text: 'Discord ToS are subject to change without notice.' });

        const row1 = new ActionRowBuilder().addComponents(ruleMenu);
        const row2 = new ActionRowBuilder().addComponents(acceptButton);

        await interaction.reply({
            embeds: [ruleEmbed],
            components: [row1, row2],
            ephemeral: true,
        })
    }
}