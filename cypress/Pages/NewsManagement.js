

class NewsManagement
{
    getNewsMenu()
  {
    cy.get(".icon-menu-container").click()
    cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
    cy.get('#CMSService\\:\\:Menu\\:NewsSetting').click()
  }

  ClicksOnAddNews()
  {
    cy.get('.btn.btn-sm.btn-primary.d-flex.align-item-center.ng-star-inserted').click()
  }

  AddUpdateNews(name,Day,Month,Year,desc,file1,file2)
  {
     cy.get('#TitleAr').clear().type(name)
     cy.get(".date-picker-icon").first().click()
     cy.get('[title="Select year"]').select(Year)
     cy.get('[title="Select month"]').select(Month)
     cy.get('.btn-light.ng-star-inserted').contains(Day).click()
     cy.get('#ContentAr').clear().type(desc)
     cy.get(".FileUpload").first().attachFile(file1, { subjectType: 'drag-n-drop' });
     cy.get(".FileUpload").last().attachFile(file2, { subjectType: 'drag-n-drop' });
     cy.wait(8000)
     cy.get('.btn.btn-primary.me-2').click()
     cy.wait(1000)
     cy.get('#confirm').click()
     cy.wait(1000)

    
  }

   clicksOnDelete()
   {
    cy.get('#confirm').click()
   }
   clicksOnEdit()
   {
     cy.get('.btn.btn-outline-primary.ng-star-inserted').click()
   }

   
   SearchForNewsEdit(ele,sel)
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
}



export default NewsManagement;