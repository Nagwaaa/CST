import NewsManagement from "./NewsManagement"




class EventCenterPage extends NewsManagement
{
    getEventsMenu()
    {
      cy.get(".icon-menu-container").click()
      cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
      cy.get('#CMSService\\:\\:Menu\\:EventsSetting').click()
    }
  
    ClicksOnAddEvents()
    {
      cy.get('.btn.btn-sm.btn-primary.d-flex.align-item-center.ng-star-inserted').click()
    }

    AddUpdateEvents(name,Day,Month,Year,pDay,pMonth,pYear,desc,file1,file2)
  {
     cy.get('#TitleAr').clear().type(name)
     cy.get(".date-picker-icon").first().click()
     cy.get('[title="Select year"]').select(Year)
     cy.get('[title="Select month"]').select(Month)
     cy.get('.btn-light.ng-star-inserted').contains(Day).click()
     cy.get(".date-picker-icon").last().click()
     cy.get('[title="Select year"]').select(pYear)
     cy.get('[title="Select month"]').select(pMonth)
     cy.get('.btn-light.ng-star-inserted').contains(pDay).click()
     cy.get('#ContentAr').clear().type(desc)
     cy.get(".FileUpload").first().attachFile(file1, { subjectType: 'drag-n-drop' });
     cy.get(".FileUpload").last().attachFile(file2, { subjectType: 'drag-n-drop' });
     cy.wait(8000)
     cy.get('.btn.btn-primary.me-2').click()
     cy.get('#confirm').click()
     
    
  }

  clickOnCheckBox()
  {
    cy.get("#support").click()
  }

  AddUpdateEventsSupport(nameAR,nameEN,Day,Month,Year,pDay,pMonth,pYear,descAR,descEN,file1,file2,file3)
  {
   
    cy.get('#TitleAr').clear().type(nameAR)
    cy.get('#TitleEn').clear().type(nameEN)

    cy.get(".date-picker-icon").first().click()
    cy.get('[title="Select year"]').select(Year)
    cy.get('[title="Select month"]').select(Month)
    cy.get('.btn-light.ng-star-inserted').contains(Day).click()

    cy.get(".date-picker-icon").last().click()
    cy.get('[title="Select year"]').select(pYear)
    cy.get('[title="Select month"]').select(pMonth)
    cy.get('.btn-light.ng-star-inserted').contains(pDay).click()

    cy.get('#ContentAr').clear().type(descAR)
    cy.get('#ContentEn').clear().type(descEN)

    cy.get(".FileUpload").first().attachFile(file1, { subjectType: 'drag-n-drop' });
    cy.get(".FileUpload").eq(1).attachFile(file2, { subjectType: 'drag-n-drop' });
    cy.get(".FileUpload").last().attachFile(file3, { subjectType: 'drag-n-drop' });
    cy.wait(9000)
    cy.get('.btn.btn-primary.me-2').click()
    cy.get('#confirm').click()


  }

  
}
export default EventCenterPage