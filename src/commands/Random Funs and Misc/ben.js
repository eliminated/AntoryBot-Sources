const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ben')
        .setDescription('Gets a random response from Ben.')
        .addStringOption(option => option.setName('question').setDescription('The question to ask Ben.').setRequired(true)),
    async execute(interaction, client) {
        let q = interaction.options.getString('question');
        let response = [
            'yes',
            'no',
            'Ho ho ho',
            'Eurfhg',
        ];
        let rare = [
            "Shut up",
            "Shut the f up",
            "Shut the bich up",
        ];
        let chance_rare = Math.floor(Math.random() * 100);      // Chance of getting a rare response, if below 50, it will less likely to get a rare response
        let chance_response = Math.floor(Math.random() * 100);  // Chance of getting a response, if below 50, it will less likely to get a response
        let rndresponse = response[Math.floor(Math.random() * response.length)];
        let rndrare = rare[Math.floor(Math.random() * rare.length)];
        if (chance_rare < 50) {
            await interaction.deferReply(rndrare);
        } else if (chance_response < 50) {
            await interaction.deferReply(rndresponse);
        } else {
            await interaction.deferReply(`**Question**: ${q}\n**Ben**: ${rndresponse}`);
        }
    
        // let rnd = Math.floor(Math.random() * response.length);
        // await interaction.deferReply();
        // await interaction.editReply({
        //     content: `**Your question**: ${q} \n\n **Ben**: ${response[rnd]}`
        // });
    }
}