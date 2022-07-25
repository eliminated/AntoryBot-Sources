module.exports = {
    name: 'listener',
    async execute(interaction, client) {
        let goodbotresponse = ["AntoryBot", "good", "good bot"];

        if(message.content.toLowerCase().includes("good bot")){
            message.channel.send(goodbotresponse[Math.floor(Math.random() * goodbotresponse.length)]);
        }
    }
}