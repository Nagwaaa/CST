import LoginPage from '../Pages/LoginPage'

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
       Cypress.Commands.add('login', (username, password) => {
            const login=new LoginPage()
            login.getUsername(username)
            login.getPassword(password)
            login.LoginSubmit()
       })
//

    Cypress.Commands.add('SetSttings', (setting,subSetting) => { 
        cy.get(".icon-menu-container").click()
        cy.get('.parent-menu > .ng-scrollbar > .ng-scrollbar-wrapper > .ng-scroll-viewport-wrapper > .ng-native-scrollbar-hider > .ng-scroll-content > ul > :nth-child(7) > .menu-item-name > span').contains(setting).click()
        cy.get('.inner-sidebar > .ng-scrollbar > .ng-scrollbar-wrapper > .ng-scroll-viewport-wrapper > .ng-native-scrollbar-hider > .ng-scroll-content > ul > :nth-child(8) > .menu-item-name').contains(subSetting).click()

    })



    Cypress.Commands.add('Calender', (year,month,day) => { 
        cy.get(".date-picker-icon").click()
        cy.get('[title="Select year"]').select(year)
        cy.get('[title="Select month"]').select(month)
        cy.get('.btn-light.ng-star-inserted').contains(day).click()
    })


    Cypress.Commands.add('UploadAttahment', (path,index) => { 
        cy.get(".FileUpload").eq(index).attachFile(path, { subjectType: 'drag-n-drop' });
    })

    Cypress.Commands.add('SearchFor', (selector,word) => { 
        cy.get(selector).type(word)
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