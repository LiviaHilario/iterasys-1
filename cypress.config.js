const { defineConfig } = require('cypress');
const fs = require('fs')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com/',
        // eslint-disable-next-line lines-around-comment
        // baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportHeight: 1080,
        viewportWidth: 1920,
        
        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            
            on('task', {

                msgConsole() {
                    
                    console.log('testes de mensagem no Node')
                    return null
                },

                lerPasta(caminho) {
                    return fs.readdirSync(caminho).length
                }
            })
        },
    },
});
