
class LoginPage
{


    getUsername(name)
    {
        return cy.get('#LoginInput_UserNameOrEmailAddress').type(name)
    }

    getPassword(password)
    {
        return cy.get('#LoginInput_Password').type(password)
    }

    LoginSubmit()
    {
        return cy.get('[name="Action"]').click()
    }
}

export default LoginPage;