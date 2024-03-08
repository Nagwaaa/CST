
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
        cy.fixture('AttendenceTestData').then(function(data)
        {
            data.forEach((user) => {
                hpage.CheckAttendence(user.username)
                cy.get('.flip-icon.icon-arrow-left.return-icon').click()
                
            })
            
        })
       
    })

    it("CheckEmplyeeNotExistInEmployeeDirectoryTC",()=>
    {
        hpage.ClicksOnEmployeeGuides()
        cy.fixture('usersData').then(function(data)
        {
            cy.get('#employee-guide-search-input').clear().type(data.usernameNotExiest)
            cy.get('.nodata-message.ng-star-inserted').should('have.text','لا يوجد موظفين مطابقين للبحث او التصفية')
            cy.log('لا يوجد موظفين مطابقين للبحث او التصفية')
            cy.get('.close-icon > .icon-x').click()
                
            
        })
       
    })
})

   