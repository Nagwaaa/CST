import EventCenterPage from '../Pages/EventCenterPage'

describe('adminManageDocuments',()=>
{
    let upadteValue
    const event=new EventCenterPage()
  
    
    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           event.getEventsMenu()
        })
    })

    it("addEventsAdmin",()=>
    {

        event.ClicksOnAddEvents()
        cy.fixture('usersData').then(function(data)
       {
          event.AddUpdateEvents("eventsss","6","3","2024",data.day,data.month,data.year,"desc",data.image,data.image)
       })
    })

    it("ViewNewsDetails",()=>
    {
        cy.fixture('usersData').then(function(data)
       {
         event.SearchForNewsEdit("eventsss",'.icon-document-text')
         cy.get('.list-details > .details > .title').should('have.text',"eventsss")
       })
    })

    it("addSupportsEvents",()=>
    {
        event.ClicksOnAddEvents()
        cy.fixture('usersData').then(function(data)
    {
       event.clickOnCheckBox()
       event.AddUpdateEventsSupport(data.newsSupport,data.newName,"6","3","2024",data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
       cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")

    })
   })

   it("AdvancedSearchForEvents",()=>
   {
     event.AdvancedSearch("2024","1","10","2024","5","10")
     
   })


   it("UpdateNewsAdmin",()=>
   {
  
       cy.fixture('usersData').then(function(data)
      {
        event.SearchForNewsEdit('NewSupportEng','.btn.btn-outline-primary.ng-star-inserted')
        cy.wait(1000)
        cy.get('#support').as('checkbox')
        .invoke('is', ':checked')
        .then(checked => {
         if (checked) {
            event.deleteAttachmentSupport()
            event.AddUpdateEventsSupport(data.newNameUpdate,data.newName,"6","3","2024",data.day,data.month,data.year,data.newsDesc,data.newsDesc,data.image,data.image,data.image)
           upadteValue = data.newNameUpdate
         }else
         {
            event.deleteAttachment()
            event.AddUpdateEvents(data.newNameUpdate,"6","3","2024",data.day,data.month,data.year,data.newsDesc,data.image,data.image)
            upadteValue = data.newNameUpdate
         }
       
      })
   })
 })

 it("DeleteEventsAdmin",()=>
 {

     cy.fixture('usersData').then(function(data)
    {
        event.SearchForNewsEdit(upadteValue,'.icon-trash')
        event.clicksOnDelete()
      
    })
 })



})