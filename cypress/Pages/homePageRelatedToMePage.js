 

 class homePageRelatedToMePage
 {


    GetRelatedToMeEmployees()
    {
        
        cy.get('#RelatedEmployeeCheckbox').click()
        cy.wait(1000)
        cy.get('.cdk-virtual-scroll-content-wrapper').find('.ng-tns-c294568263-3.ng-star-inserted:visible').each(($l,index,$list)=>
        {

            cy.wrap($list).find('.d-flex.flex-wrap.align-items-center').eq(index).click()
            cy.wait(1000)
            cy.get(':nth-child(7) > :nth-child(5) > .text-black > .ng-tns-c2600274924-4').then($emp=>
                {
                  const direct=$emp.text()
                  if(direct.includes("mohamd عبدالرحمن صالح AlQadhibi"))
               {
                  cy.log("exist")
                  cy.get('.flip-icon.icon-arrow-left.return-icon').click()
                  cy.wait(1000)
               }
               
           
         

           })
         
     })
    }
 }

 export default homePageRelatedToMePage;