import NewsManagement from '../Pages/NewsManagement'
import AddUpadteDocPage from '../Pages/AddUpadteDocPage'

describe('adminManageDocuments',()=>
{
    let upadteValue
    const mNews=new NewsManagement()
    const deleteAttac=new NewsManagement()
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           mNews.getNewsMenu()
        })
    })


    it("addNewsAdmin",()=>
    {

        mNews.ClicksOnAddNews()
        cy.fixture('usersData').then(function(data)
       {
         mNews.AddUpdateNews(data.newName,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
         cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")
       })
    })

    it("ViewNewsDetails",()=>
    {
        cy.fixture('usersData').then(function(data)
       {
         mNews.SearchForNewsEdit(data.newName,'.icon-document-text')
         cy.get('.list-details > .details > .title').should('have.text',data.newName)
       })
    })


     it("addSupportsNews",()=>
     {
      mNews.ClicksOnAddNews()
      cy.fixture('usersData').then(function(data)
     {
        mNews.clickOnCheckBox()
        mNews.AddUpdateNewsSupport(data.newsSupport,data.newName,data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
        cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")

     })
    })

    it("AdvancedSearchForNews",()=>
    {
      mNews.AdvancedSearch("2024","1","10","2024","5","10")
      
    })


    it("UpdateNewsAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
         mNews.SearchForNewsEdit(data.newName,'.btn.btn-outline-primary.ng-star-inserted')
         cy.wait(1000)
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            deleteAttac.deleteAttachmentSupport()
            deleteAttac.AddUpdateNewsSupport(data.newNameUpdate,data.newName,data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
            upadteValue = data.newNameUpdate
          }else
          {
            deleteAttac.deleteAttachment()
            mNews.AddUpdateNews(data.newNameUpdate,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
            upadteValue = data.newNameUpdate
          }
        
       })
    })
  })

    it("DeleteNewsAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
         mNews.SearchForNewsEdit(upadteValue,'.icon-trash')
         mNews.clicksOnDelete()
         
       })
    })

  })
    
