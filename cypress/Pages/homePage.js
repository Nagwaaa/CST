

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
        cy.get('#employee-guide-search-input').type(name)
        cy.get('.d-flex.flex-wrap.align-items-center.ng-tns-c469332416-10').click()
        //cy.wait(2000)

        cy.get('.badge').then(($el)=>
        {
            const status=$el.text()
            if(status ==='( متواجد )')
            {
                cy.get('.badge-status.ng-tns-c2600274924-4.badge-status-success.ng-star-inserted').should('have.css', 'background-color', 'rgb(45, 212, 191)')
                cy.log('Employee exists')
            }else
            {
                cy.get('.badge-status.ng-tns-c2600274924-4.badge-status-danger.ng-star-inserted').should('have.css', 'background-color', 'rgb(225, 29, 72)')
                cy.log('Employee Not exists')
            }
        })
    }

/*
    UpdateFavoriteServices(serveceName)
    {
       cy.get('#customization-menu').click({force: true})
       cy.wait(1000)
       cy.get('.service-view.ng-star-inserted').first().type(serveceName)
       cy.get('.service-edit-action')
    }*/
}

 export default homePage;