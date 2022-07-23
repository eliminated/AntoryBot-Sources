module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        const status = [
            'Listening to your commands...',
            'Playing your souls',
            'Sleeping',
            'Working with improvements',
            'Say that again',
            'Minecrafting',
        ];

        const random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random], { type: 'PLAYING' });
        console.log(`\n\nLog: I am ready to serve as a bot\nStatus: Ready\nLogged in as: ${client.user.tag}`);
    }
}