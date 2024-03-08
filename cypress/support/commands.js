import LoginPage from '../Pages/LoginPage'
import 'cypress-file-upload'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//



    const login=new LoginPage()
    Cypress.Commands.add('login', (username, password) => {
        
        login.getUsername(username)
        login.getPassword(password)
        login.LoginSubmit()
    })

    Cypress.Commands.add('SetSettings', (subSetting) => { 
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:ApprovedDocumentLibrary').click()

    })



    Cypress.Commands.add('Calender', (year,month,day) => { 
        cy.get(".date-picker-icon").click()
        cy.get('[title="Select year"]').select(year)
        cy.get('[title="Select month"]').select(month)
        cy.get('.btn-light.ng-star-inserted').contains(day).click()
    })

    Cypress.Commands.add('CalenderWithTime', (year,month,day,hour,min) => { 
        cy.get(".date-picker-icon").click()
        cy.get('[title="Select year"]').select(year)
        cy.get('[title="Select month"]').select(month)
        cy.get('.btn-light.ng-star-inserted').contains(day).click()
        cy.get('.ng-touched > fieldset > .ngb-tp > .ngb-tp-hour > .ngb-tp-input').type(hour)
        cy.get('.ng-touched > fieldset > .ngb-tp > .ngb-tp-minute > .ngb-tp-input',min)

    })


    Cypress.Commands.add('GetUserName', () => { 
        
         cy.get(':nth-child(1) > .text')
         .invoke('text')
         .then((uname) => {
            const userArray=uname.split()
            const username=userArray[0]
            console.log(username)
            return username
        })
        
      
         
        
    })


    Cypress.Commands.add('UploadAttahment', (path,index) => { 
        cy.get(".FileUpload").eq(index).attachFile(path, { subjectType: 'drag-n-drop' });
    })

    Cypress.Commands.add('SearchFor', (selector,word) => { 
        cy.get(selector).clear().type(word)
    })


    Cypress.Commands.add('FindSpeceficContent', (ele,sel) => { 

        cy.get('#filterTxt').clear().type(ele)
         cy.wait(1000)
         cy.get('.ngx-datatable-card').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
        {
         const name=$l.find('.text-bold.ng-star-inserted').text()
         if(name.includes(ele))
         {
             cy.get(sel).first().click('center',{force: true})
             return false
         }
     })
    })

  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })