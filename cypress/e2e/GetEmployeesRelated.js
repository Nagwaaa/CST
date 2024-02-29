import homePage from '../Pages/homePage'
import homePageRelatedToMePage from '../Pages/homePageRelatedToMePage'

describe('EmployeesRealtedToMe',()=>
{
    let unamee;
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

        cy.wait(2000)
        cy.get(':nth-child(1) > .text')
        .invoke('text')
        .then((uname) => {
            
           const userArray=uname.split('،')
           const username=userArray[1].trim()
           hpage.ClicksOnEmployeeGuides()
           employeeRelated.GetRelatedToMeEmployees(username)
      
        })
       
       
    })

})