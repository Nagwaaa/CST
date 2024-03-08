import QuestionsPage from '../Pages/QuestionsPage'
import NewsManagement from '../Pages/NewsManagement'

describe('AdminManageUsers',()=>
{
    const faq=new QuestionsPage()
    const news=new NewsManagement()
    let upadteValue

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           faq.getQuestionsManagment()
           
        })
    })


    it("AddQuestionsAdmin",()=>
    {
        faq.ClickOnAddQuestions()
        faq.AddQuestions("QuestionOne","AnswerOne")
        cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1) > .datatable-body-cell-label > :nth-child(2)').first().should('have.text',' QuestionOne ')
    })

    it("AddQuestionSupportEnglish",()=>
    {
        faq.ClickOnAddQuestions()
        faq.clicksOnCheck()
        faq.AddQuestionsSupport("QuestionOneAR","AnswerOneAR","QuestionOneEN","AnswerOneEN")
        cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1) > .datatable-body-cell-label > :nth-child(2)').first().should('have.text',' QuestionOneAR ')
        
    })


    it.only("UpdateQuestionsAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
        news.SearchForNewsEdit('QuestionOne',':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 154.714px; height: auto;"] > .datatable-body-cell-label > .card-action > .table-actions > .btn-outline-primary')
         cy.wait(1000)
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            faq.AddQuestionsSupport("QuestionOneARU","AnswerOneARU","QuestionOneENU","AnswerOneENU")
            upadteValue = data.newNameUpdate
            cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1) > .datatable-body-cell-label > :nth-child(2)').first().should('have.text',' QuestionOneARU ')
          }else
          {
            faq.AddQuestions("QuestionOneU","AnswerOneU")
            upadteValue = data.newNameUpdate
            cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(1) > .datatable-body-cell-label > :nth-child(2)').first().should('have.text',' QuestionOneU ')
          }
        
       })
    })
  })

  it("DeleteQuestionAdmin",()=>
  {
 
      cy.fixture('usersData').then(function(data)
     {
        faq.SearchForQuestionEdit('QuestionOne','.btn.btn-outline-danger.ng-star-inserted')
        news.clicksOnDelete()
        cy.get('.abp-toast.abp-toast-success').should('have.text','  تم الحذف بنجاح')
       
     })
  })
})