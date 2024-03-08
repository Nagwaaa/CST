import TawasolCenterPage from '../Pages/TawasolCenterPage'


describe('adminManageDocuments',()=>
{
 
    let upadteValue
    const tawasol=new TawasolCenterPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           tawasol.getTawasolMenu()
        })
    })

    it("addNewsAdmin",()=>
    {

        tawasol.ClicksOnAddNews()
        cy.fixture('usersData').then(function(data)
       {
         tawasol.AddUpdateNews(data.newName,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
         cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")
       })
    })

    it("ViewTawasolDetails",()=>
    {
        cy.fixture('usersData').then(function(data)
       {
        tawasol.SearchForNewsEdit(data.newName,'.icon-document-text')
         cy.get('.list-details > .details > .title').should('have.text',data.newName)
       })
    })

    it("addSupportsNews",()=>
     {
        tawasol.ClicksOnAddNews()
      cy.fixture('usersData').then(function(data)
     {
        tawasol.clickOnCheckBox()
        tawasol.AddUpdateNewsSupport(data.newsSupport,data.newName,data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
        cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")

     })
    })

    it("AdvancedSearchForNews",()=>
    {
        tawasol.AdvancedSearch("2024","1","10","2024","5","10")
      
    })

    it("UpdateNewsAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
        tawasol.SearchForNewsEdit(data.newName,'.btn.btn-outline-primary.ng-star-inserted')
         cy.wait(1000)
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            tawasol.deleteAttachmentSupport()
            tawasol.AddUpdateNewsSupport(data.newNameUpdate,data.newName,data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
            upadteValue = data.newNameUpdate
          }else
          {
            tawasol.deleteAttachment()
            tawasol.AddUpdateNews(data.newNameUpdate,data.day,data.month,data.year,data.newsDesc,data.image,data.image)
            upadteValue = data.newNameUpdate
          }
        
       })
    })
  })
   
  it.only("DeleteNewsAdmin",()=>
  {
 
      cy.fixture('usersData').then(function(data)
     {
        tawasol.SearchForNewsEdit('update test news','.icon-trash')
        tawasol.clicksOnDelete()
       
     })
  })


})
