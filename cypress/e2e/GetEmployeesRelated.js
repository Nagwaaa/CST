import homePage from '../Pages/homePage'
import homePageRelatedToMePage from '../Pages/homePageRelatedToMePage'

describe('EmployeesRealtedToMe',()=>
{
    const hpage=new homePage()
    const employeeRelated=new homePageRelatedToMePage()
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
        })
    })


    it("EmployeesRealtedToMeTC",()=>
    {
        hpage.ClicksOnEmployeeGuides()
        employeeRelated.GetRelatedToMeEmployees()
    })

})