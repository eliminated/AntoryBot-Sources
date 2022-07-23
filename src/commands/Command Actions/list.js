const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { readdirSync } = require('fs');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('list')
        .setDescription('Get a list of all commands.')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The category to list commands from.')
                .setRequired(true)
                .addChoices(
                    { name: 'Command Actions', value: 'command-actions' },
                    { name: 'User Actions', value: 'user-actions' },
                    { name: 'Random Funs and Misc', value: 'random-funs-and-misc' },
                    { name: 'All', value: 'all' }
                )),
    async execute(interaction, client) {
            const selected_category = interaction.options.getString('category');
            const cmdActions = readdirSync('./src/commands/Command Actions/');
            const usrActions = readdirSync('./src/commands/User Actions/');
            const randomFunsAndMisc = readdirSync('./src/commands/Random Funs and Misc/');

            // Lists
            const usrActionsList = usrActions.map(usr => usr.replace('.js', ''));
            const cmdActionsList = cmdActions.map(cmd => cmd.replace('.js', ''));
            const randomFunsAndMiscList = randomFunsAndMisc.map(fun => fun.replace('.js', ''));

            switch (selected_category) {
                case 'command-actions':

                    const cmdActionsEmbed = new EmbedBuilder()
                        .setTitle(`Command List: ${selected_category}`)
                        .setDescription(`Here is a list of all commands: \n\n${cmdActionsList.join('\n ')}`)
                        .setColor('#0099ff')
                        .setTimestamp(Date.now());

                        await interaction.reply({ embeds: [cmdActionsEmbed] });
                    break;

                case 'user-actions':
                    const usrActionsEmbed = new EmbedBuilder()
                        .setTitle(`Command List: ${selected_category}`)
                        .setDescription(`Here is a list of all commands: \n\n${usrActionsList.join('\n ')}`)
                        .setColor('#0099ff')
                        .setTimestamp(Date.now());

                        await interaction.reply({ embeds: [usrActionsEmbed] });
                    break;

                case 'random-funs-and-misc':
                    const randomFunsAndMiscList = randomFunsAndMisc.map(fun => fun.replace('.js', ''));
                    const randomFunsAndMiscEmbed = new EmbedBuilder()
                        .setTitle(`Command List: ${selected_category}`)
                        .setDescription(`Here is a list of all commands: \n\n${randomFunsAndMiscList.join('\n ')}`)
                        .setColor('#0099ff')
                        .setTimestamp(Date.now());

                        await interaction.reply({ embeds: [randomFunsAndMiscEmbed] });

                    break;
            
                case 'all':
                    const all = cmdActions.concat(usrActions).concat(randomFunsAndMisc);
                    const allCommands = all.map(cmd => cmd.replace('.js', ''));
                    const allCommandsEmbed = new EmbedBuilder()
                        .setTitle(`Command List: ${selected_category}`)
                        .setDescription(`Here is a list of all commands: \n\n${allCommands.join('\n')}`)
                        .setColor('#0099ff')
                        .setTimestamp(Date.now());

                        await interaction.reply({ embeds: [allCommandsEmbed] });
                    break;
                default:
                    const cmdsFolderIncludesAll = cmdActions.concat(usrActions);
                    const cmdsFolderList = cmdsFolderIncludesAll.map(cmd => cmd.replace('.js', ''));
                    const cmdsFolderEmbed = new EmbedBuilder()
                        .setTitle('Command list')
                        .setDescription(`Here is a list of all commands: \n\n${cmdsFolderList.join('\n')}`)
                        .setColor('#0099ff')
                        .setTimestamp(Date.now());
                    await interaction.deferReply();
                    await wait(1500);
                    await interaction.editReply({ content: `No such category named *${selected_category}*. This list of command might help you to find it!`, embeds: [cmdsFolderEmbed] });
                    break;
            }
        }

            

    
}