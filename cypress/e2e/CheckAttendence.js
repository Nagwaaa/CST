import homePage from '../Pages/homePage'

describe('CheckEmployeeAttendence',()=>
{
    const hpage=new homePage()
    beforeEach(()=>
    {
        cy.on("fail", (err, runnable) => {
            cy.log("This Employee doesn't exists in Employee Dictionary");
            return false;
          });
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

  

    
})