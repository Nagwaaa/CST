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
}
export default AddUpadteDocPage;