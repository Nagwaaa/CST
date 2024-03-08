import OfferCenterPage from '../Pages/OfferCenterPage'
import NewsManagement from '../Pages/NewsManagement'

describe('adminManageDocuments',()=>
{
 
    let upadteValue
    const offer=new OfferCenterPage()
    const news=new NewsManagement()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           offer.getOfferMenu()
        })
    })

    it("addOffersAdmin",()=>
    {
        offer.ClicksOnAddOffer()
        offer.AddUpdateOffer("offerTwo","desc","files/ev4.jpg","موسم الرياض","16","3","2024","17","3","2024","7","3","2024","files/ev4.jpg")
        cy.wait(1000)
    })

    it("ViewOfferDetails",()=>
    {
        cy.fixture('usersData').then(function(data)
       {
         news.SearchForNewsEdit('offerTwo','.icon-document-text')
         cy.get('.list-details > .details > .title').should('have.text','offerTwo')
       })
    })

    it("addSupportsOffers",()=>
     {
        offer.ClicksOnAddOffer()
      cy.fixture('usersData').then(function(data)
     {
        offer.clickOnCheckBox()
        offer.AddUpdateOfferSupport("offerTwoS","offerTwoSEN","desc","descEN","files/ev4.jpg","files/ev4.jpg","موسم الرياض","16","3","2024","17","3","2024","7","3","2024","files/ev4.jpg")
        cy.get('.abp-toast-message').should('have.text',"تم حفظ البيانات بنجاح")

     })
    })

    it("UpdateNewsAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
         news.SearchForNewsEdit('offerTwoSU','.btn.btn-outline-primary.ng-star-inserted')
         cy.wait(1000)
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            offer.deleteAttachmentSupport()
            offer.AddUpdateOfferSupport("offerTwoSU","offerTwoSEN","desc","descEN","files/ev4.jpg","files/ev4.jpg","موسم الرياض","16","3","2024","17","3","2024","7","3","2024","files/ev4.jpg")
            upadteValue = data.newNameUpdate
          }else
          {
            offer.deleteAttachment()
            offer.AddUpdateOffer("offerTwoU","desc","files/ev4.jpg","موسم الرياض","16","3","2024","17","3","2024","7","3","2024","files/ev4.jpg")
            upadteValue = data.newNameUpdate
          }
        
       })
    })
  })

  it("DeleteOffersAdmin",()=>
  {
 
      cy.fixture('usersData').then(function(data)
     {
        news.SearchForNewsEdit('offerTwoSU','.icon-trash')
        news.clicksOnDelete()
       
     })
  })
})