import sectorAddUpdateDocPage from '../Pages/sectorAddUpdateDocPage'
import AddUpadteDocPage from '../Pages/AddUpadteDocPage'
import deleteDocPage from '../Pages/deleteDocPage'


describe('SctorDeleteHisDocuments',()=>
{
    let Dname
    const addDoc=new sectorAddUpdateDocPage()
    const adminAdd=new AddUpadteDocPage()
    const delDoc=new deleteDocPage()

    before(()=>
    {
      cy.visit('/')
      cy.fixture('usersData').then(function(userPassword)
      {
         cy.login(userPassword.username,userPassword.password)
         cy.wait(1000)
         cy.SetSettings(userPassword.Contain)
         addDoc.clickOnAddDocument()
         adminAdd.addUpadteDocument("Documnet For update",userPassword.image,userPassword.sector,'الإدارة العامة لمراقبة الطيف الترددي',userPassword.type,userPassword.year,userPassword.month,userPassword.day,"nooote")
         cy.get('#profile').click()
         cy.get('.logout').click()
         cy.wait(2000)

      })
    })


    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.sectorName,userPassword.sectorPassword)
           cy.wait(1000)
           cy.SetSettings(userPassword.Contain)
           
        })
    })

    afterEach(()=>
    {
        cy.wait(2000)
        cy.get('#profile').click()
        cy.get('.logout').click()
        cy.wait(4000)
        cy.visit('/')
        cy.wait(4000)
        cy.fixture('usersData').then(function(userPassword)
      {
         cy.login(userPassword.sectorName,userPassword.sectorPassword)
         cy.wait(1000)
         addDoc.ClicksOnSuspend()
      })
        cy.fixture('usersData').then(function(data)
        {
            cy.FindSpeceficContent(Dname,'.icon-trash')
            delDoc.clicksOnDelete()
            
    
        })
    })


    it('SectorAddDocument',()=>
    {   
       
       cy.fixture('usersData').then(function(data)
       {
         addDoc.clickOnAddDocument()
         addDoc.addUpadteDocument(data.docName,data.image,'الإدارة العامة لمراقبة الطيف الترددي',data.type,data.year,data.month,data.day,"nooote")
         Dname=data.docName
       
        

       })

    })

    it('SectorAddDocumentSupportEnglish',()=>
    {   

       cy.fixture('usersData').then(function(data)
       {
         addDoc.clickOnAddDocument()
         cy.get('#support').check()
         addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.dep,data.type,data.year,data.month,data.day,"nooot")
         Dname=data.docNameSup
        
         

       })

    })

    it('SectorUpdateDocument',()=>
     {
        
       cy.fixture('usersData').then(function(data)
       {

         cy.FindSpeceficContent("Documnet For update",'.table-actions > :nth-child(2) > .icon-pencil')
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            addDoc.deleteAttachInUpdateSupport()
            addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.dep,data.type,data.year,data.month,data.day,"nooot")
            Dname="Documnet For update"
          } else {
            addDoc.deleteAttachmentInUpdate()
            addDoc.addUpadteDocument(data.docNameUp,data.image,data.dep,data.type,data.year,data.month,data.day,"noootes")
            Dname="Documnet For update"
           
          }
        })
         
    })
})
    it('SectorDeleteDocument',()=>
    {
    cy.fixture('usersData').then(function(data)
    {
        cy.FindSpeceficContent("Documnet For update",'.icon-trash')
        delDoc.clicksOnDelete()
        Dname="Documnet For update"
        
    })
})

})

/*
describe('SctorAdvancedFilterDownloadAttachment',()=>
{
    let Dname
    const addDoc=new sectorAddUpdateDocPage()
    const adminAdd=new AddUpadteDocPage()
    const delDoc=new deleteDocPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.sectorName,userPassword.sectorPassword)
           cy.wait(1000)
           cy.SetSettings(userPassword.Contain)
           
        })
    })




})*/