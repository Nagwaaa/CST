
class AddAnnouncementPage
{
  getAnnouncementMenu()
  {
    cy.get(".icon-menu-container").click()
    cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
    cy.get('#CMSService\\:\\:Menu\\:Announcement').click()
  }
  
  clicksOnAddAnnouncement()
  {
     cy.get('.btn.btn-sm.btn-primary.d-flex.align-items-center.ng-star-inserted').click()
  }

  addAnnouncement(name,desc,startDay,startMonth,startYear,endDay,endMonth,endYear)
  {
    cy.get('#titleAr').clear().type(name)
    cy.get('#contentAr').clear().type(desc)

    cy.get(".date-picker-icon").first().click()
    cy.get('[title="Select year"]').select(startYear)
    cy.get('[title="Select month"]').select(startMonth)
    cy.get('.btn-light.ng-star-inserted').contains(startDay).click()
    
    cy.get(".date-picker-icon").last().click()
    cy.get('[title="Select year"]').select(endYear)
    cy.get('[title="Select month"]').select(endMonth)
    cy.get('.btn-light.ng-star-inserted').contains(endDay).click()
    cy.get('.btn.btn-primary.me-2').click()

    //cy.Calender(startYear,startMonth,startDay)
    //cy.Calender(endYear,endMonth,endDay)

  }

  clickOnUpdateAnnouncement()
  {
    cy.get('.btn.btn-outline-primary.ng-star-inserted').click()
  }


  SearchForAnnouncementEit(ele,sel)
  {
    cy.get('#filterTxt').clear().type(ele)
    cy.wait(1000)
    cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
   {
    const name=$l.find('.title').text()
    if(name.includes(ele))
    {
        cy.get(sel).first().click('center',{force: true})
        return false
    }
})
}

  ClickOnDeleteAnnouncement()
  {
    cy.get('.icon-trash').click()
  } 
}
export default AddAnnouncementPage;