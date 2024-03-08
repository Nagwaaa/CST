import sectorAddUpdateDocPage from '../Pages/sectorAddUpdateDocPage'
import deleteDocPage from '../Pages/deleteDocPage'


describe('AdminApproveDocuments',()=>
{
    let Dname
    const addDoc=new sectorAddUpdateDocPage()
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

    afterEach(()=>
    {
      cy.get('.image-container.ng-star-inserted').click()
      cy.get('.logout').click()
      cy.wait(2000)
      cy.visit('/')
      cy.fixture('usersData').then(function(userPassword)
      {
         cy.login(userPassword.username,userPassword.password)
         cy.wait(1000)
         addDoc.ClicksOnSuspend()
      })

      cy.fixture('usersData').then(function(data)
      {
          cy.FindSpeceficContent(Dname,'.icon-check')
          delDoc.clicksOnDelete()
          cy.wait(1000)
  
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

         cy.FindSpeceficContent(Dname,'.table-actions > :nth-child(2) > .icon-pencil')
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            addDoc.deleteAttachInUpdateSupport()
            addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.dep,data.type,data.year,data.month,data.day,"nooot")
            Dname=data.docNameSup
         
          } else {
            addDoc.deleteAttachmentInUpdate()
            addDoc.addUpadteDocument(data.docNameUp,data.image,data.dep,data.type,data.year,data.month,data.day,"noootes")
            Dname=data.docNameUp

          }
        })
         
    })

 })

    it('SectorDeleteDocument',()=>
    {
     cy.fixture('usersData').then(function(data)
     {
         cy.FindSpeceficContent(Dname,'.icon-trash')
         delDoc.clicksOnDelete()
         Dname=data.docNameSup
     
 
     })
 })

    
})

describe.only('AdminRejectDocuments',()=>
{   
    let Dname
    const addDoc=new sectorAddUpdateDocPage()
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

    afterEach(()=>
    {
      cy.get('.image-container.ng-star-inserted').click()
      cy.get('.logout').click()
      cy.wait(2000)
      cy.visit('/')
      cy.fixture('usersData').then(function(userPassword)
      {
         cy.login(userPassword.username,userPassword.password)
         cy.wait(1000)
         addDoc.ClicksOnSuspend()
      })

      cy.fixture('usersData').then(function(data)
      {
          cy.FindSpeceficContent(Dname,'.btn.btn-outline-danger.ng-star-inserted')
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
         Dname =data.docNameSup

       })

    })

    it('SectorUpdateDocument',()=>
     {
        
       cy.fixture('usersData').then(function(data)
       {

         cy.FindSpeceficContent(data.docName,'.table-actions > :nth-child(2) > .icon-pencil')
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            addDoc.deleteAttachInUpdateSupport()
            addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.dep,data.type,data.year,data.month,data.day,"nooot")
            Dname =data.docNameSup
         
          } else {
            addDoc.deleteAttachmentInUpdate()
            addDoc.addUpadteDocument(data.docNameUp,data.image,data.dep,data.type,data.year,data.month,data.day,"noootes")
            Dname =data.docNameUp
            

          }
        })
        
         
    })

 })

    it('SectorDeleteDocument',()=>
    {
     cy.fixture('usersData').then(function(data)
     {
         cy.FindSpeceficContent(data.docName,'.icon-trash')
         delDoc.clicksOnDelete()
         Dname=data.docName
      
 
     })
 })

    
})


