class userManagementPage
{
    getUsersManagment()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:ManageUsers').click()
    }

    ClickOnAddUser()
    {
        cy.get('.btn.btn-sm.btn-primary').click()
    }

    AddUsers(uname,empName,empNameEN,mail,phone,job,sector,dept,gdept,manager)
    {
        cy.get(':nth-child(1) > .form-group > .form-control').type(uname)
        cy.get(':nth-child(3) > .form-group > .form-control').type(empName)
        cy.get(':nth-child(4) > .form-group > .form-control') .type(empNameEN)
        cy.get(':nth-child(5) > .form-group > .form-control').type(mail)

        cy.get(':nth-child(6) > .form-group > .form-control').type(phone)

        cy.get(':nth-child(7) > .form-group > .form-control').type(job)
        cy.get(':nth-child(8) > .form-group > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(sector)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(9) > .form-group > .ng-select-searchable > .ng-select-container').type(dept)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(10) > .form-group > .ng-select-searchable > .ng-select-container').type(gdept)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(11) > .form-group > .ng-select-searchable > .ng-select-container').type(manager)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get('.btn.btn-primary.d-flex.mx-3.btn-padding').click()
        cy.get("#confirm").click()

    }

    UpdateUsers(empName,empNameEN,mail,phone,job,sector,dept,gdept,manager)
    {
    
        cy.get(':nth-child(3) > .form-group > .form-control').clear().type(empName)
        cy.get(':nth-child(4) > .form-group > .form-control').clear().type(empNameEN)
        cy.get(':nth-child(5) > .form-group > .form-control').clear().type(mail)

        cy.get(':nth-child(6) > .form-group > .form-control').clear().type(phone)

        cy.get(':nth-child(7) > .form-group > .form-control').clear().type(job)
        cy.get(':nth-child(8) > .form-group > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').clear().type(sector)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(9) > .form-group > .ng-select-searchable > .ng-select-container').clear().type(dept)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(10) > .form-group > .ng-select-searchable > .ng-select-container').clear().type(gdept)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get(':nth-child(11) > .form-group > .ng-select-searchable > .ng-select-container').clear().type(manager)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()
        cy.get('.btn.btn-primary.d-flex.mx-3.btn-padding').click()
        cy.get("#confirm").click()


    }

    clicksOnUpdate()
    {
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(12) > .datatable-body-cell-label > .table-actions > :nth-child(1) > .btn > .icon-pencil').click()
    }
    
    GiveUserPermission(...permission)
    {
        cy.get(".icon-cog").click()
        cy.get(".btn.btn-outline-primary.edit-permissions-btn").click()
      
            cy.get('.row.group-rules.ng-star-inserted').first().find('.col-lg-4.col-md-6.col-12.px-0.ng-star-inserted').each(($ele,index,$list)=>
            {
                let name=$ele.find('.mb-1').text()
                cy.wait(2000)
                for(let x=0;x<permission.length;x++)
                { 
                    if(name===permission[x])
                    {
                       cy.get('.mb-1').contains(permission[x]).click({force: true})
                       cy.wait(1000)
                    }
                    
                }
                         
            })
                    
                   
            }
        
           AdvancedSearch(sector,department,gDepartment,manager,type,...permission)
           {
            cy.get('.filter-section > .btn > span').click()
            cy.get(':nth-child(1) > .ng-untouched > .ng-select-searchable > .ng-select-container').type(sector)
            cy.get('.ng-option-label.ng-star-inserted').click()

            cy.get(':nth-child(2) > .ng-untouched > .ng-select-searchable > .ng-select-container').type(department)
            cy.get('.ng-option-label.ng-star-inserted').click()

            cy.get(':nth-child(3) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(gDepartment)
            cy.get('.ng-option-label.ng-star-inserted').click()

            cy.get(':nth-child(4) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(manager)
            cy.get('.ng-option-label.ng-star-inserted').click()

            for(let c=0;c<permission.length;c++)
           {
            cy.get('.ng-select-multiple > .ng-select-container > .ng-value-container').then((element)=>
            {
                cy.wrap(element).type(permission[c])

                if(c<permission.length-1)
                {
                  cy.wrap(element).clear()
                }

                cy.get('.ng-option.ng-option-child.ng-star-inserted').contains(permission[c]).click()
                
            })
            
         }

         if(type===' معرف ERP ')
         {
            cy.get('#employeeType1').click()
         }else if(type===' معرف يدويا ')
         {
            cy.get('#employeeType2').click()
         }else
         {
            cy.log('All Users')
         }

         cy.get('.btn.btn-primary.d-flex.align-item-center.gap.me-2').click()
    }
        
        
    DownloadExcellSheet()
    {
        cy.get('.btn.btn-sm.btn-outline-primary.export-btn.d-flex.align-items-center').click()
        cy.wait(3000)
    }
    

  
}
export default userManagementPage;