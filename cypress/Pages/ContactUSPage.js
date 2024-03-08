class ContactUSPage
{
    getContactUsManagment()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:ContactUsManagement').click()
    }


    GetMultiMails(sel,sel2,...arr)
    {
        for(let x=0;x<arr.length;x++)
        {
            cy.log(arr.length)
            cy.get(sel).eq(x).clear().type(arr[x])   //'[formcontrolname="inquiryEmail"]'
            if(x==arr.length-1)
            {
                return false
            }else{
                cy.get(sel2).click()
                cy.wait(1000)
            }
            
        }
  
       
    }


    UpdateContactDetails(contEmail,contEmail2,phone1,phone2,support,code,url,inqEmail,repEmail,sugEmail)
    {



        this.GetMultiMails('[formcontrolname="inquiryEmail"]',':nth-child(1) > .d-flex > .add-email',...inqEmail)
        
        this.GetMultiMails('[formcontrolname="reportEmail"]',':nth-child(2) > .d-flex > .add-email',...repEmail)
        this.GetMultiMails('[formcontrolname="suggestionEmail"]',':nth-child(3) > .d-flex > .add-email',...sugEmail)
        

        cy.get('[formcontrolname="contactFooterEmail"]').first().clear().type(contEmail)
        cy.get('.add-icon.ng-star-inserted').first().click()
        cy.get('[formcontrolname="contactFooterEmail"]').last().clear().type(contEmail2)
        
        cy.get('#footerPhoneNumber').first().clear().type(phone1)
        cy.get('.add-icon.ng-star-inserted').last().click()
        cy.get('div.ng-untouched > .d-flex > .form-group > #footerPhoneNumber').clear().type(phone2)

        cy.get(':nth-child(1) > #support').clear().type(support)
        cy.get(':nth-child(2) > #support').clear().type(code)
        cy.get('#request').clear().type(url)
        cy.get('.btn.btn-primary').click()
        cy.get('#confirm').click()

    }

    deleteContactUsDetails()
    {
      
    
         cy.get('.delete.ng-star-inserted:visible').each(($el,index,$list)=>
         {
            
            $el.click()
         })
     }
    
        
    

}
export default ContactUSPage;