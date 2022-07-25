const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sort')
        .setDescription('Sorts an array.')
        .addIntegerOption(option => option.setName('list').setDescription('The array to sort.').setRequired(true)),
    async execute(interaction, client) {
        const list = interaction.options.getInteger('list');
        // Integer combined like: '23149' can be sorted by using function
        function sortNumber(combinedNumber) {
            let sortedNumber = combinedNumber.split('').sort((a, b) => a - b);
            return sortedNumber.join('');
        }
        let sorted = sortNumber(list.toString());
        let sortedtoArray = sorted.split('');
        await interaction.reply({ content: `Sorted: ${sorted}\n [${sortedtoArray.join(', ')}]` });
    }
}