

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
     cy.get('#confirm').click()
     
    
  }

  clickOnCheckBox()
  {
    cy.get("#support").click()
  }

  AddUpdateNewsSupport(nameAR,nameEN,Day,Month,Year,descAR,descEN,file1,file2,file3)
  {
   
    cy.get('#TitleAr').clear().type(nameAR)
    cy.get('#TitleEn').clear().type(nameEN)

    cy.get(".date-picker-icon").first().click()
    cy.get('[title="Select year"]').select(Year)
    cy.get('[title="Select month"]').select(Month)
    cy.get('.btn-light.ng-star-inserted').contains(Day).click()

    cy.get('#ContentAr').clear().type(descAR)
    cy.get('#ContentEn').clear().type(descEN)

    cy.get(".FileUpload").first().attachFile(file1, { subjectType: 'drag-n-drop' });
    cy.get(".FileUpload").eq(1).attachFile(file2, { subjectType: 'drag-n-drop' });
    cy.get(".FileUpload").last().attachFile(file3, { subjectType: 'drag-n-drop' });
    cy.wait(9000)
    cy.get('.btn.btn-primary.me-2').click()
    cy.get('#confirm').click()


  }


   clicksOnDelete()
   {
    cy.get('#confirm').click()
   }
   clicksOnEdit()
   {
     cy.get('.btn.btn-outline-primary.ng-star-inserted').click()
   }

   clicksOnViewDetails()
   {
      cy.get(".icon-document-text").click()
   }
   
   SearchForNewsEdit(ele,sel)
  {
      cy.get('#filterTxt').clear().type(ele)
      cy.wait(1000)
      cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
    {
      const name=$l.find('.title').first().text()
      cy.log(name)
      if(name.includes(ele))
      {
          cy.get(sel).first().click('center',{force: true})
          return false
      }
  })
 } 

  GetDateWithSateFormat(year,month,day)
  {
    const dateString=new Date(year,month,day)
    const date = new Date(dateString);

     year = date.getFullYear(); 
     month = date.getMonth(); 
     day = date.getDate()+1; 

    const formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;

    return formattedDate
  }

  AdvancedSearch(syear,smon,sday,eyear,emon,eday)
  {
    const startDate=this.GetDateWithSateFormat(syear,smon,sday)
    const endDate=this.GetDateWithSateFormat(eyear,emon,eday)

    cy.get('.filter-section > .btn').click()

    cy.get(".date-picker-icon").first().click()
    cy.get('[title="Select year"]').select(syear)
    cy.get('[title="Select month"]').select(smon)
    cy.get('.btn-light.ng-star-inserted').contains(sday).click()

    cy.get(".date-picker-icon").eq(1).click()
    cy.get('[title="Select year"]').select(eyear)
    cy.get('[title="Select month"]').select(emon)
    cy.get('.btn-light.ng-star-inserted').contains(eday).click()


    cy.get('.filter-actions > .btn-primary').click()
    cy.wait(1000)
    cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($element,index,$list)=>
    {
      const pdat =$element.find('.item').text()
      {
        let arr =pdat.split(':')
        let dd=arr[1].trim()
        expect(new Date(dd)).to.be.gte(new Date(startDate))
        expect(new Date(dd)).to.be.lte(new Date(endDate))
      }
         
    })
      
  }

   deleteAttachmentSupport()
   {
    cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
    cy.get("#confirm").click()
    cy.get('#AttachmentEn > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1) > .icon-x').click()
    cy.get("#confirm").click()
    cy.wait(1000)
    cy.get('.file-action > :nth-child(1) > .icon-x').click()
    cy.get("#confirm").click()
   }

   deleteAttachment()
   {
    cy.get('#AttachmentAr > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1)').click()
    cy.get("#confirm").click()
    cy.get('#MainId > #Attachmentfiles > .p-fileupload > .p-fileupload-content > .cst-files > .file > .file-action > :nth-child(1)').click()
    cy.get("#confirm").click()

   }

}



export default NewsManagement;