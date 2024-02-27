import LoginPage from '../Pages/LoginPage'
import homePage from '../Pages/homePage'

//to run dashboard use "npm run Dashboard"
// Login to CST With diffrent cases     
describe('loginToCST',()=>
{
    const login =new LoginPage()
    const homepage=new homePage()

    beforeEach(()=>
    {
        cy.visit('/')
        /* this code to pass all fail testcases 
        cy.on('fail', (err, runnable) => {
             //return true; 
             console.log(err.message)
        })*/

    })

    it('loginWithValidUsernameAndPassword',()=>
    {
        cy.fixture('usersData').then(function(userPassword)
            {
                cy.login(userPassword.username,userPassword.password)
                homepage.getContainerMenu().should('exist')
            })
    })
    
    it('loginWithInvalidUsernameAndPassword',()=>
    {
        cy.fixture('usersData').then(function(userPassword)
        {
            // login function exists in command.js file
            cy.login(userPassword.usernameInv,userPassword.passwordInv)
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',userPassword.invMessage)
        })
        
    })

    it('loginWithInvalidUsernameAndValidPassword',()=>
    {

        cy.fixture('usersData').then(function(userPassword)
        {
            cy.login(userPassword.usernameInv,userPassword.password)
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',userPassword.invMessage)
        })
    })

    it('loginWithValidUsernameAndInvalidPassword',()=>
    {
 
        cy.fixture('usersData').then(function(userPassword)
        {
            cy.login(userPassword.username,userPassword.passwordInv)
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',userPassword.invMessage)
        })
    })



    it('UsernameRequired',()=>
    {

        cy.fixture('usersData').then(function(userPassword)
        {
            login.getUsername(userPassword.username).clear()
            login.getPassword(userPassword.password)
            login.LoginSubmit()
            cy.get('#LoginInput_UserNameOrEmailAddress-error').should('have.text',userPassword.userNameRequired)
        })
    })

    it('PasswordRequired',()=>
    {

        cy.fixture('usersData').then(function(userPassword)
        {
            login.getUsername(userPassword.username)
            login.getPassword(userPassword.password).clear()
            login.LoginSubmit()
            cy.get('#LoginInput_Password-error').should('have.text',userPassword.passwordRequired)
        })
    })

    it('UsernameAndPasswordRequired',()=>
    {
        cy.fixture('usersData').then(function(userPassword)
        {
            login.getUsername(userPassword.username).clear()
            login.getPassword(userPassword.password).clear()
            login.LoginSubmit()
            cy.get('#LoginInput_UserNameOrEmailAddress-error').should('have.text',userPassword.userNameRequired)
            cy.get('#LoginInput_Password-error').should('have.text',userPassword.passwordRequired)

        })
    })


})
