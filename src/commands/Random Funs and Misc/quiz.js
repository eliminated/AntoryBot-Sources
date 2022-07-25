const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quiz')
        .setDescription('Answers a random math quiz.'),
    async execute(interaction, client) {
        let expressionLength = Math.floor(Math.random() * 10) + 1;
        let expression = '';
        let operators = ['+', '-', '*', '/'];
        let answer = 0;
        for (let i = 0; i < expressionLength; i++) {
            let operator = operators[Math.floor(Math.random() * operators.length)];
            let number = Math.floor(Math.random() * 10) + 1;
            expression += number + operator;
            if (operator === '+') {
                answer += number;
            } else if (operator === '-') {
                answer -= number;
            } else if (operator === '*') {
                answer *= number;
            } else if (operator === '/') {
                answer /= number;
            } else {
                throw new Error('Invalid operator.');
            }
        }

        await interaction.reply({
            content: `${expression} = ?`,
        });

        const filter = (message) => message.author.id === client.user.id;
        const collector = interaction.channel.createMessageCollector(filter, { time: 30000 });

        collector.on('collect', (ans) => {
            if (ans.content === answer.toString()) {
                interaction.reply('Correct!');
            } else {
                interaction.reply('Incorrect!');
            }
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
    }
}