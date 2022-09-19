describe ('Teste do Cypress.config.js', () => {
    
    it('Teste de mensagm no console - Browser', () => {
        console.log('teste de mensagem no Browser')
    })
    
    it('teste de task ', () => {
        cy.task('msgConsole')
    })
    it('conta total de arquivo da API', () => {
        cy.task('lerPasta', 'cypress/e2e/api')
            .then(totalDeArquivos => {
                cy.log(`Quantidade de Arquivos: ${totalDeArquivos}`)
            })
    })

    it('conta total de arquivo do Node', () => {
        cy.task('lerPasta', 'cypress/e2e/nodejs')
            .then(totalDeArquivos => {
                cy.log(`Quantidade de Arquivos: ${totalDeArquivos}`)
            })
    })
})