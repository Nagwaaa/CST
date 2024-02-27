import NewsManagement from '../Pages/NewsManagement'
import AddUpadteDocPage from '../Pages/AddUpadteDocPage'

describe('adminManageDocuments',()=>
{
    const mNews=new NewsManagement()
    const deleteAttac=new AddUpadteDocPage()
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
        })
    })


    it("addNewsAdmin",()=>
    {
        mNews.getNewsMenu()
        mNews.ClicksOnAddNews()
        cy.fixture('usersData').then(function(data)
       {
         mNews.AddUpdateNews(data.newName,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
       })
    })

    it("UpdateNewsAdmin",()=>
    {
        mNews.getNewsMenu()
        cy.fixture('usersData').then(function(data)
       {
         mNews.SearchForNewsEdit(data.newName,'.btn.btn-outline-primary.ng-star-inserted')
         deleteAttac.deleteAttachmentInUpdate()
         mNews.AddUpdateNews(data.newName,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
       })
    })

    it("DeleteNewsAdmin",()=>
    {
        mNews.getNewsMenu()
        cy.fixture('usersData').then(function(data)
       {
         mNews.SearchForNewsEdit(data.newName,'.icon-trash')
         mNews.clicksOnDelete()
         
       })
    })
    
})