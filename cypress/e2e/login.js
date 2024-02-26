import LoginPage from '../Pages/LoginPage'


// Login to CST With diffrent cases
describe('loginToCST',()=>
{
    const login =new LoginPage()

    beforeEach(()=>
    {
        cy.visit('/')
    })

    it('loginWithInvalidUsernameAndPassword',()=>
    {
        cy.fixture('usersData').then(function(user)
        {
            login.getUsername(user.usernameInv)
            login.getPassword(user.passwordInv)
            login.LoginSubmit()
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',user.mess)
        })
        
    })

    it('loginWithInvalidUsernameAndValidPassword',()=>
    {

        cy.fixture('usersData').then(function(user)
        {
            login.getUsername(user.usernameInv)
            login.getPassword(user.password)
            login.LoginSubmit()
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',user.mess)
        })
    })

    it('loginWithValidUsernameAndInvalidPassword',()=>
    {
 
        cy.fixture('usersData').then(function(user)
        {
            login.getUsername(user.username)
            login.getPassword(user.passwordInv)
            login.LoginSubmit()
            cy.get('.alert.alert-danger.alert-dismissible.fade.show').should('contain',user.mess)
        })
    })



    it('UsernameRequired',()=>
    {

        cy.fixture('usersData').then(function(user)
        {
            login.getUsername("abc").clear()
            login.getPassword("123")
            login.LoginSubmit()
            cy.get('#LoginInput_UserNameOrEmailAddress-error').should('have.text','الحقل اسم المستخدم أو البريد الالكتروني إجباري.')
        })
    })
    it('PasswordRequired',()=>
    {

        cy.fixture('usersData').then(function(user)
        {
            login.getUsername("abc")
            login.getPassword("123").clear()
            login.LoginSubmit()
            cy.get('#LoginInput_Password-error').should('have.text','الحقل كلمه السر إجباري.')
        })
    })
    it('UsernameAndPasswordRequired',()=>
    {
        cy.fixture('usersData').then(function(user)
        {
            login.getUsername("abc").clear()
            login.getPassword("123").clear()
            login.LoginSubmit()
            cy.get('#LoginInput_UserNameOrEmailAddress-error').should('have.text','الحقل اسم المستخدم أو البريد الالكتروني إجباري.')
            cy.get('#LoginInput_Password-error').should('have.text','الحقل كلمه السر إجباري.')

        })
        })


        it('loginWithValidUsernameAndPassword',()=>
        {
            cy.fixture('usersData').then(function(user)
            {
                login.getUsername(user.username)
                login.getPassword(user.password)
                login.LoginSubmit()
                cy.get('.header-content-item.icon-menu-container').should('exist')
            })
        })
    })
