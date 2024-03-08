

class QuestionsPage
{
    getQuestionsManagment()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:FAQ').click()
    }

    ClickOnAddQuestions()
    {
        cy.get('.btn.create-faq-btn.btn-primary').click()
    }

    AddQuestions(question,answer)
    {
      cy.get("[formcontrolname='questionAr']").clear().type(question)
      cy.get("#answerAr").clear().type(answer)
      cy.get('.btn-primary').click()
      cy.get("#confirm").click()
    }

    clicksOnCheck()
    {
        cy.get("#support").click()
    }
    AddQuestionsSupport(questionAr,answerAr,questionEn,answerEn)
    {
        cy.get("[formcontrolname='questionAr']").clear().type(questionAr)
        cy.get("#answerAr").clear().type(answerAr)
        cy.get("[formcontrolname='questionEn']").clear().type(questionEn)
        cy.get("#answerEn").clear().type(answerEn)
        cy.get('.btn-primary').click()
        cy.get("#confirm").click()

    }

    SearchForQuestionEdit(ele,sel)
    {
        cy.get('#filterTxt').clear().type(ele)
        cy.wait(1000)
        cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
      {
         $l.find('.datatable-body-row.datatable-row-even.ng-star-inserted').then((ele)=>
        {
            ele.find('.datatable-row-center.datatable-row-group.ng-star-inserted').then((ele2)=>
            {
                const name = ele2.find('.datatable-body-cell.sort-active.ng-star-inserted').text()
                cy.log(name)
            })
        })
        /*cy.log(name)
        if(name.includes(ele))
        {
            cy.get(sel).first().click('center',{force: true})
            return false
        }*/
    })
   } 

}
export default QuestionsPage;