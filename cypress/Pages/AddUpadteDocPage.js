class AddUpadteDocPage
{


    clickOnAddDocument()
    {
        cy.get('.btn-add.ng-star-inserted').click()
    }

    clicksOnUpdateDocument()
    {
        cy.get('.btn.btn-outline-primary.btn-action-edit.ng-star-inserted').click()
    }
    addUpadteDocumentSupport(nameAr,nameEN,attach1,attach2,sector,dep,type,year,month,day,note='')
    {
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.get('#fileNameEn').clear().type(nameEN)

        cy.UploadAttahment(attach1,0)
        cy.UploadAttahment(attach2,1)
        cy.wait(6000)

        cy.get(".ng-input").first().type(sector)
        cy.get(".ng-option-marked").click()
        
        cy.get(".ng-input").eq(1).type(dep)
        cy.get(".ng-option-marked").click()

        cy.get(".ng-input").last().type(type)
        cy.get(".ng-option-marked").click()

        cy.Calender(year,month,day)

        cy.get('#notes').clear().type(note)

        cy.get('.btn.btn-primary.me-2').click()
        cy.get('#confirm').click()
        cy.wait(1000)
    }

    addUpadteDocument(nameAr,attach,sector,dep,type,year,month,day,note='')
    {
       
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.UploadAttahment(attach,0)
        cy.wait(6000)
        cy.get(".ng-input").first().type(sector)
        cy.get(".ng-option-marked").click()
        
        cy.get(".ng-input").eq(1).type(dep)
        cy.get(".ng-option-marked").click()
       
        cy.get(".ng-input").last().type(type)
        cy.get(".ng-option-marked").click()
        cy.Calender(year,month,day)
        cy.get('#notes').clear().type(note)
        cy.get('.btn.btn-primary.me-2').click()
        cy.get('#confirm').click()
        cy.wait(1000)
        
    }

    deleteAttachmentInUpdate()
    {
        cy.get('.btn.btn-light.ng-star-inserted').first().click()
        cy.get('#confirm').click()
    }

    deleteAttachInUpdateSupport()
    { 
        cy.get('.btn.btn-light.ng-star-inserted').first().click()
        cy.get('#confirm').click()
        cy.get('.btn.btn-light.ng-star-inserted').eq(1).click()
        cy.get('#confirm').click()
        
    }


    CheckSupport()
    {
        let ch=false
        cy.get('#support').as('checkbox')
        .invoke('is', ':checked')
        .then(checked => {
          if (checked) {
            ch = true
          } else {
            ch = false
          }
           return ch
        });
    }

    AdvancedFilter(ele,sector=" ",dept=" ",type=" ",status=" ")
    {
        cy.get('.btn.btn-outline-light.btn-filter-action.ms-1.ng-star-inserted').click()
        cy.get('.ng-input').first().type(sector)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get('.ng-input').eq(1).type(dept)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get('.ng-input').eq(2).type(type)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()

        cy.get('.ng-input').last().type(status)
        cy.get('.ng-option.ng-star-inserted').first().click()

        cy.get('.btn.btn-primary').click()
         
        cy.get('#filterTxt').clear().type(ele)
       // cy.get()


        /*
        cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
        {
         const name=$l.find('.column-label.ng-star-inserted').text()
          
     })*/
        
    }
}
export default AddUpadteDocPage;