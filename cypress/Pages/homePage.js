

class homePage
{
   
    getContainerMenu()
    {
        return cy.get('.header-content-item.icon-menu-container')
    }

   // function to get Date/time of today
    GetCurrentTime()
    {
        const now = new Date();
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        
        const final=`${year}-${month}-${day}T${hours}:${minutes}`
        return final
    }

    ClicksOnEmployeeGuides()
    {
        cy.get('.header-content-item.employee-guide-item').click()
    }

    CheckAttendence(name)
    {
        cy.get('#employee-guide-search-input').clear().type(name)
        cy.wait(2000)
        cy.get('.d-flex.flex-wrap.align-items-center').click()
           
        //cy.wait(2000)

        cy.get('.badge').then(($el)=>
        {
            let status=$el.text()
            if(status ==='( متواجد )')
            {
                cy.get('.badge-status.ng-tns-c2600274924-4.badge-status-success.ng-star-inserted').should('have.css', 'background-color', 'rgb(45, 212, 191)')
                cy.log('available')
            }
            else if(status ==='( غير متواجد )')
            {
                cy.get('.badge-status.ng-tns-c2600274924-4.badge-status-danger.ng-star-inserted').should('have.css', 'background-color', 'rgb(225, 29, 72)')
                cy.log('Not available')
            }else
            {
                cy.log("This Staus doesn't defined")
            }
        })
    }



    getMainMenu()
    {
     return cy.get(".header-content-item.icon-menu-container").click();
    }
    getSettingsMenu()
    {
     return cy.get('#CMSService\\:\\:Menu\\:Settings').click();
    }
    getMediaList()
    {
     return cy.get("#CMSService\\:\\:Menu\\:MediaLibrarySetting").click();

    }


}

 export default homePage;