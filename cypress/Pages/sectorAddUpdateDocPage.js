class sectorAddUpdateDocPage
{

    ClicksOnSuspend()
   {
       cy.get(".icon-menu-container").click()
       cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
       cy.get('#CMSService\\:\\:Menu\\:SuspendedDocumentLibrary').click()
   }

    clickOnAddDocument()
    {
        cy.get('.btn-add.ng-star-inserted').click()
    }

    clicksOnUpdateDocument()
    {
        cy.get('.btn.btn-outline-primary.btn-action-edit.ng-star-inserted').click()
    }
    addUpadteDocumentSupport(nameAr,nameEN,attach1,attach2,dep,type,year,month,day,note='')
    {
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.get('#fileNameEn').clear().type(nameEN)

        cy.UploadAttahment(attach1,0)
        cy.UploadAttahment(attach2,1)
        cy.wait(6000)
        
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

    addUpadteDocument(nameAr,attach,dep,type,year,month,day,note='')
    {
       
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.UploadAttahment(attach,0)
        cy.wait(6000)
        
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
        cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
        cy.get('#confirm').click()
    }

    deleteAttachInUpdateSupport()
    { 
        cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
        cy.get('#confirm').click()
        cy.wait(1000)
        cy.get('#AttachmentEn > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
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
        cy.get('#filterTxt').clear().type(ele)
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
         

        
        cy.get('.datatable-row-wrapper.ng-star-inserted').then((DocumentRow)=>
        {
            const startDate = new Date('2025/11/15');
            const endDate = new Date('2025/11/25');   

            cy.wrap(DocumentRow).find('.text-bold.ng-star-inserted').eq(1).should('contain',ele)
            cy.wrap(DocumentRow).find(':nth-child(4) > .datatable-body-cell-label').should('contain',sector)
            cy.wrap(DocumentRow).find(':nth-child(5) > .datatable-body-cell-label').should('contain',dept)
            cy.wrap(DocumentRow).find(':nth-child(3) > .datatable-body-cell-label').should('contain',type)
            cy.get(':nth-child(6) > .datatable-body-cell-label').then((sDate)=>
            {
                //cy.log(sDate)
                expect(new Date(sDate.text())).to.be.gte(startDate)
                expect(new Date(sDate.text())).to.be.lte(endDate)
            })          


        })
       
        
    }
}
export default sectorAddUpdateDocPage;