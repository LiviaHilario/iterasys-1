describe('API - Post', () => {
    
    // let jwt = ''

    before(() => {
        
        // cy.request({
        //     method: 'POST',
        //     url:'/api/auth',
        //     body: {
        //         email: 'liviateste@gmail.com',
        //         password: '123456'
        //     }
        // }).then(({body}) => {
        //     // cy.log(body.jwt)
        //     jwt = body.jwt
        // })

        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    after(() => {
        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })    
    })

    it('Valida todos os posts ', () => {

        cy.request({
            method: 'GET',
            url: '/api/posts',

            // headers: {
            //     cookie: `jwt= ${jwt}`   
            // }
                     
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    // it('Valida todos os posts 2', () => {

    //     cy.request({
    //         method: 'GET',
    //         url: '/api/posts'

    //         // headers: {
    //         //     cookie: `jwt= ${jwt}`   
    //         // }
    //     }).then(({ status }) => {
    //         expect(status).to.eq(200)
    //     })
    // })

    // it('Valida todos os posts 3', () => {

    //     cy.request({
    //         method: 'GET',
    //         url: '/api/posts'

    //         // headers: {
    //         //     cookie: `jwt= ${jwt}`   
    //         // }
    //     }).then(({ status }) => {
    //         expect(status).to.eq(200)
    //     })
    // })
})