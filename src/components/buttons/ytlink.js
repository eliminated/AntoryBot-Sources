module.exports = {
    data: {
        name: `ytlink`,
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `Haha you just got rickrolled by me https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
        });
    }
}