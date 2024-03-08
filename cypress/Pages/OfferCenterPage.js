
class OfferCenterPage
{

    getOfferMenu()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get("#CMSService\\:\\:Menu\\:OffersSetting").click()
    }

    ClicksOnAddOffer()
  {
    cy.get('.btn.btn-sm.btn-primary.d-flex.align-items-center.ng-star-inserted').click()
  }

  AddUpdateOffer(name,desc,file1,classification,Day,Month,Year,eDay,eMonth,eYear,pDay,pMonth,pYear,file2)
  {
     cy.get('#TittleAr').clear().type(name)
     cy.get('#DetailsAr').clear().type(desc)
     cy.get(".FileUpload").first().attachFile(file1, { subjectType: 'drag-n-drop' });

     cy.get('.ng-select-container').type(classification)
     cy.get('.ng-option-label.ng-star-inserted').click()

     cy.get(".date-picker-icon").first().click()
     cy.get('[title="Select year"]').select(Year)
     cy.get('[title="Select month"]').select(Month)
     cy.get('.btn-light.ng-star-inserted').contains(Day).click()

     cy.get(".date-picker-icon").eq(1).click()
     cy.get('[title="Select year"]').select(eYear)
     cy.get('[title="Select month"]').select(eMonth)
     cy.get('.btn-light.ng-star-inserted').contains(eDay).click()

     cy.get(".date-picker-icon").last().click()
     cy.get('[title="Select year"]').select(pYear)
     cy.get('[title="Select month"]').select(pMonth)
     cy.get('.btn-light.ng-star-inserted').contains(pDay).click()
   
    
     cy.get(".FileUpload").last().attachFile(file2, { subjectType: 'drag-n-drop' });
     cy.wait(8000)
     cy.get('.btn.btn-primary.me-2').click()
     cy.get('#confirm').click()
     
    
  }

  clickOnCheckBox()
  {
    cy.get("#support").click()
  }

  AddUpdateOfferSupport(nameAR,nameEN,descAR,descEN,fileAR,fileEN,classification,Day,Month,Year,eDay,eMonth,eYear,pDay,pMonth,pYear,file2)
  {
     cy.get('#TittleAr').clear().type(nameAR)
     cy.get('#TittleEn').clear().type(nameEN)

     cy.get('#DetailsAr').clear().type(descAR)
     cy.get('#DetailsEn').clear().type(descEN) 
     cy.get(".FileUpload").first().attachFile(fileAR, { subjectType: 'drag-n-drop' });
     cy.get(".FileUpload").eq(1).attachFile(fileEN, { subjectType: 'drag-n-drop' });

     cy.get('.ng-select-container').type(classification)
     cy.get('.ng-option-label.ng-star-inserted').click()

     cy.get(".date-picker-icon").first().click()
     cy.get('[title="Select year"]').select(Year)
     cy.get('[title="Select month"]').select(Month)
     cy.get('.btn-light.ng-star-inserted').contains(Day).click()

     cy.get(".date-picker-icon").eq(1).click()
     cy.get('[title="Select year"]').select(eYear)
     cy.get('[title="Select month"]').select(eMonth)
     cy.get('.btn-light.ng-star-inserted').contains(eDay).click()

     cy.get(".date-picker-icon").last().click()
     cy.get('[title="Select year"]').select(pYear)
     cy.get('[title="Select month"]').select(pMonth)
     cy.get('.btn-light.ng-star-inserted').contains(pDay).click()
   
    
     cy.get(".FileUpload").last().attachFile(file2, { subjectType: 'drag-n-drop' });
     cy.wait(8000)
     cy.get('.btn.btn-primary.me-2').click()
     cy.get('#confirm').click()
     
    
  }

  deleteAttachmentSupport()
  {
   cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
   cy.get("#confirm").click()
   cy.get('#AttachmentEn > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
   cy.get("#confirm").click()
   cy.wait(1000)
   cy.get('#PictureMain > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1)').click()
   cy.get("#confirm").click()
  }

  deleteAttachment()
  {
   cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1)').click()
   cy.get("#confirm").click()
   cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
   cy.get("#confirm").click()

  }
  


}
export default OfferCenterPage;