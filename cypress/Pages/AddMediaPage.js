class AddMediaPage{
    ClickOnAddMediaBtn()
    {
      return cy.get('.btn-sm').click();
    }
    AddNeWMediaImagewithSupport(MediaNameAR,MediaNameEn,Hashtag,imageType,attach,year,month,day,toast)
    {
      cy.get('#support').check();
      cy.get('#TittleAr').type(MediaNameAR);
      cy.get('#TittleEn').type(MediaNameEn);
      cy.get('#hashtag').type(Hashtag +"{enter}");
      //Select Publish date
      cy.get(".date-picker-icon").click()
      cy.get('[title="Select year"]').select(year)
      cy.get('[title="Select month"]').select(month)
      cy.get('.ngb-dp-day.ng-star-inserted').contains(day).click()
      //Select image type
      cy.get('.ng-input').type(imageType);
      cy.get('.ng-option.ng-star-inserted').first().click();
      //Upload image 
      cy.UploadAttahment(attach,0);
        cy.wait(6000)
         //Press on Add Button
         cy.get('[type="submit"]').click();
         //Press on Confirm Button from the Confirmation message
         cy.get("#confirm").click();
        cy.get(".abp-toast-message").should("have.text",toast);
    }
    // This Function for adding media with image type and supported english content
    AddUpdateNeWMediaVideowithoutSupport(MediaNameAR,Hashtag,VideoType,videocode,year,month,day,toast)
    {
    
      //Enter the Titles with AR Name
      cy.get('#TittleAr').clear().type(MediaNameAR);
      //Enter the hashtag
      cy.get('#hashtag').type(Hashtag +"{enter}");
      //Select Publish date
      cy.get(".date-picker-icon").click()
      cy.get('[title="Select year"]').select(year)
      cy.get('[title="Select month"]').select(month)
      cy.get('.ngb-dp-day.ng-star-inserted').contains(day).click()
      //Select Video Type
      cy.get('.ng-input').type(VideoType);
      cy.get('.ng-option.ng-star-inserted').last().click();
      //enter video code after selecting video type 
      cy.get("#VideoCode").clear().type(videocode);
        //Press on Add Button
        cy.get('[type="submit"]').click();
        //Press on Confirm Button from the Confirmation message
        cy.get("#confirm").click();
        cy.get(".abp-toast-message").should("have.text",toast);
      
    }
    SearchForMedia(Name,selector){
      cy.get('#filterTxt').clear().type(Name)
         cy.wait(1000)
         cy.get('.ngx-datatable.data-view.fixed-header.virtualized')
            .find('.card-view.ng-star-inserted').each(($Word,index,$List)=>{
              const title=$Word.find(".title.mb-2").text()
              cy.log(title);
              if(title.includes(Name))
         {
             cy.get(selector).first().click('center',{force: true})
             return false
         }

            })
            
            
    }
    clearhashtag(){
   cy.get(".p-chips-token-icon.p-icon").click();
  }


    }
    export default AddMediaPage;