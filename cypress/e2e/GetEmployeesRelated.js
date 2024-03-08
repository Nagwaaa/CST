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
        cy.wait(2000) // wait to load page and pick the username in home page
        cy.get(':nth-child(1) > .text')
        .invoke('text')
        .then((uname) => {
          const userArray=uname.split('،')
          const username=userArray[1].trim()
          hpage.ClicksOnEmployeeGuides()
          employeeRelated.GetRelatedToMeEmployees(username)
          cy.get('.close-icon > .icon-x').click()
        })
        
    })
})

    describe('EmployeesRealtedToMeWithNoRelated',()=>
{
    let unamee;
    const hpage=new homePage()
    const employeeRelated=new homePageRelatedToMePage()
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login("faydi","P@ssw0rd")
           cy.wait(1000)
        })
    })

    it("ManagerNotHaveEmployeeRealtedToMeTC",()=>
    {
        cy.wait(1000)
        hpage.ClicksOnEmployeeGuides()
        cy.get('#RelatedEmployeeCheckbox').click()
        cy.get('.close-icon > .icon-x').click()
        cy.get('.nodata-message.ng-star-inserted').should('have.text','لا يوجد موظفين في دليل الموظفين حاليا')
        
    })


})



