describe('Home Page', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Valida o Titulo e subtitulo da aplicação', () => {
        
        cy.get('[data-test="landing-title"]')
            .should('exist')
            .and('have.class', 'x-large')
        cy.contains('Crie um perfil/portfolio, compartilhe posts e obtenha ajuda da comunidade de QA')
            .should('exist')

        cy.contains('h1','QAs')
            .should('exist')
    })
    it('Seleciona varios elementos', () => {
        cy.get('a')
            .eq(5)
            .should('have.text', 'Cadastrar')

        cy.get('a')
            .eq(6)
            .should('have.text', 'Login')
        
        cy.get('a.btn-primary')
            .should('have.text', 'Cadastrar')
    })
    it('Seleciona elementos com find ', () => {
        cy.get('.landing')
            .find('h1')
            .should('have.text', 'Conectando QAs ...')
    })

    it('SEleciona elementos com Next', () => {

        cy.get('li')
            .eq(0)
            .next()
            .prev()
        
    })
})