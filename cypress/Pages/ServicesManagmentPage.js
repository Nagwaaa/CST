

class ServicesManagmentPage
{
    getServicesManagment()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:ServiceSetting').click()
    }

    clisksOnAddService()
    {
        cy.get('.btn.create-faq-btn').click()
    }

    clicksOnViewSerivces()
    {
        cy.get('.ms-0 > img').click()
    }

    addServices(nameAR,nameEN,serURL,defaultSer,activate,attach1,attach2,mainCateg,subCat,SysName,delveryTime,avgtime,descAR,descEN,requireDocAR,requireDocEN,ProceduresAr,ProceduresEn,questionAr='',answerAr='',questionEn='',answerEn='',...relatedSer)
    {
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control').last().clear().type(nameAR)
        cy.get(':nth-child(1) > .pt > .form-group > .form-control').last().clear().type(nameEN)
        cy.get('.justifiy-content-center > .col-lg-6 > .form-group > .form-control').clear().type(serURL)
        
        if(activate ==='active' || activate ==='Active' || activate ==='مفعل')
        {
            cy.get('label[for="switchActiveStatus"]').invoke('text').then((element)=>
            {
                if(element === 'مفعل' || element === 'Active' || element ==='active')
                {
                    cy.log("already active")
        
                }else
                {
                    cy.log(element)
                    cy.get('#switchActiveStatus').click()
  
                }
            })
        }else if(activate ==='inactive' || activate ==='Inactive' || activate ==='غير مفعل')
        {
            cy.get('label[for="switchActiveStatus"]').invoke('text').then((element)=>
            {
                if(element === 'غير مفعل' || element === 'inactive' || element ==='Inactive')
                {
                    cy.log("already not active")
                }else
                {
                    cy.get('#switchActiveStatus').click() 
                }
            }) 
        }else
        {
            cy.log("invalid input")
        }

        if(defaultSer==='yes' ||defaultSer==='Yes')
        {
            cy.get('#yesOption').then($element => {
                if ($element.is('[disabled]')) {
                    cy.log("You exceed 4 services")
                }else
                {
                    cy.get('#yesOption').click()
                }
            })
        }else if(defaultSer==='no'||defaultSer==='No')
        {
            cy.get('#yesOption').then($element => {
            if ($element.is('[disabled]')) {
                cy.log("You exceed 4 services So by default NO")
            }else
            {
                cy.get('#noOption').click()
            }
        })
        }else
        {
            cy.log("Invalid input")
        }

        cy.UploadAttahment(attach1,0)
        cy.UploadAttahment(attach2,1)
        cy.wait(6000)

        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .ng-select-searchable > .ng-select-container').type(mainCateg)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get(':nth-child(5) > .pt > .form-group > .ng-select-searchable > .ng-select-container').type(subCat)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .ng-select-searchable > .ng-select-container').type(SysName)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get(':nth-child(6) > .pt > .form-group > .ng-select-searchable > .ng-select-container').type(delveryTime)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get('.pt-2 > .form-group > .ng-select-searchable > .ng-select-container').type(avgtime)
        cy.get('.ng-option-label.ng-star-inserted').click()

        for(let c=0;c<relatedSer.length;c++)
        {
            cy.get('.ng-select-multiple > .ng-select-container').then((element)=>
            {
                cy.wrap(element).type(relatedSer[c])
            })
            cy.get('.ng-option-label.ng-star-inserted').click()
        }
        
        cy.get('#descriptionAr').clear().type(descAR)
        cy.get('#descriptionEn').clear().type(descEN)

        cy.get('#requiredDocumentsAr').clear().type(requireDocAR)
        cy.get('#requiredDocumentsEn').clear().type(requireDocEN)

        cy.get('#serviceProceduresAr').clear().type(ProceduresAr)
        cy.get('#serviceProceduresEn').clear().type(ProceduresEn)

        cy.get('.btn-add > span').click()

        cy.get('#questionAr').type(questionAr)
        cy.get('#answerAr').type(answerAr)

        cy.get('#questionEn').type(questionEn)
        cy.get('#answerEn').type(answerEn)

        cy.get('.btn.btn-primary.d-flex.mx-3.btn-padding').click()
        cy.get("#confirm").click()
    }

    ClicksonUpdate()
    {
        cy.get(".btn.btn-sm.border-0.px-0.mx-1.ng-star-inserted").click()
    }

    deleteServicesDetails()
    {
        cy.get('#imageId > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
        cy.get("#confirm").click()
        cy.get('#userManualAttachmentID > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
        cy.get("#confirm").click()
        cy.get('.col-lg-12 > .form-group > .ng-select-searchable > .ng-select-container > .ng-clear-wrapper').click()
        cy.get('.delete').click()
        
    }

    activateDeacticateServices()
    {
       cy.get(".form-check-input.ng-untouched.ng-pristine.ng-valid:visible").click()
       cy.get("#confirm").click()
    }

    AdvancedSerach(mainCategory,subCategory,status)
    {
        cy.get('.filter-section > .btn > span').click()

        cy.get(':nth-child(1) > .ng-select-searchable > .ng-select-container').clear().type(mainCategory)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()

        cy.get(':nth-child(2) > .ng-select-searchable > .ng-select-container').clear().type(subCategory)
        cy.get('.ng-option-label.ng-star-inserted').click()

        cy.get(':nth-child(3) > .ng-select-searchable > .ng-select-container').clear().type(status)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()

        cy.get('.filter-actions > .btn').click()



    }
}
export default ServicesManagmentPage;