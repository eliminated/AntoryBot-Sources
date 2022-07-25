const { readdirSync } = require('fs');

module.exports = (client) => {
    client.componentHandler = async () => {
        const componentsFolder = readdirSync(`./src/components/`);
        for(const folder of componentsFolder) {
            const componentFiles = readdirSync(`./src/components/${folder}`).filter(file => file.endsWith('.js'));

            const { buttons, selectMenus, modals } = client;

            switch (folder) {
                case "buttons":
                    for(const file of componentFiles) {
                        const button = require(`../components/buttons/${file}`);  
                        buttons.set(button.data.name, button);
                    }
                    break;
            
                case "selectMenus":
                    for(const file of componentFiles) {
                        const menu = require(`../components/selectMenus/${file}`);
                        selectMenus.set(menu.data.name, menu);
                    }
                    break;

                case "modals":
                    for(const file of componentFiles) {
                        const modal = require(`../components/modals/${file}`);
                        modals.set(modal.data.name, modal);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}