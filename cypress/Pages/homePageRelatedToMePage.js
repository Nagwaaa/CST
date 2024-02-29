 

 class homePageRelatedToMePage
 {


    GetRelatedToMeEmployees(manager)
    {
        
        cy.get('#RelatedEmployeeCheckbox').click()
        cy.wait(1000)
        cy.get('.cdk-virtual-scroll-content-wrapper').find('.ng-tns-c294568263-3 > .card > .card-body').each(($l,index,$list)=>
        {

            cy.wrap($list).find('.d-flex.flex-wrap.align-items-center').eq(index).click()
            cy.wait(1000)
            cy.get(':nth-child(7) > :nth-child(5) > .text-black').then($emp=>
                {
                  const direct=$emp.text()
                  if(direct.includes(manager))
                  {
                     cy.log("exist")
                     cy.get(':nth-child(7) > :nth-child(5) > .text-black').should('contain',manager)
                     cy.get('.flip-icon.icon-arrow-left.return-icon').click()
                     cy.wait(1000)
                  }
                  else
                  {
                     cy.log("This manager doesn't exists")
   
                  }
               
           })
         
     })
     
    }
 }

 export default homePageRelatedToMePage;