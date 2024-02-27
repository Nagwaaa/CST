import homePage from '../Pages/homePage'

describe('CheckEmployeeAttendence',()=>
{
    const hpage=new homePage()
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
        })
    })


    it('CheckEmplyeePresent',()=>
    {
        hpage.ClicksOnEmployeeGuides()
        cy.fixture('usersData').then(function(data)
        {
            hpage.CheckAttendence(data.employeeName)
        })
       
    })

  

    
})