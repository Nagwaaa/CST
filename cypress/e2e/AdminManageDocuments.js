import AddUpdateDocPage from '../Pages/AddUpadteDocPage'
import deleteDocPage from '../Pages/deleteDocPage'

describe('adminManageDocuments',()=>
{
    const addDoc=new AddUpdateDocPage()
    const delDoc=new deleteDocPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           cy.SetSettings(userPassword.Contain)
        })
    })
    
    
    it('AddDocument',()=>
    {   
       
       cy.fixture('usersData').then(function(data)
       {
         addDoc.clickOnAddDocument()
         addDoc.addUpadteDocument(data.docName,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"nooote")
         cy.get(".abp-toast-message").last().should('have.text',data.message)

       })

    })

    it('AddDocumentSupportEnglish',()=>
    {   

       cy.fixture('usersData').then(function(data)
       {
         addDoc.clickOnAddDocument()
         cy.get('#support').check()
         addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"nooot")
         cy.get(".abp-toast-message").last().should('have.text',data.message)

       })

    })

    it('UpdateDocument',()=>
     {
        
       cy.fixture('usersData').then(function(data)
       {

         cy.FindSpeceficContent(data.docName,'.table-actions > :nth-child(2) > .icon-pencil')
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            addDoc.deleteAttachInUpdateSupport()
            addDoc.addUpadteDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"nooot")
         
          } else {
            addDoc.deleteAttachmentInUpdate()
            addDoc.addUpadteDocument(data.docNameUp,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"noootes")

          }
        })
         
    })

 })


    it('AdminDownloadAttachment',()=>
    {
       cy.fixture('usersData').then(function(data)
       {
         cy.FindSpeceficContent(data.docNameSup,'.icon-download')
         cy.readFile('C:/Users/Ts/Desktop/CST/cypress/downloads/'+data.image).should('exist')
        
       })
    })
    
   
    it('AdminActiveInactiveDocument',()=>
    {
    
       cy.fixture('usersData').then(function(data)
       {
         cy.FindSpeceficContent(data.docNameSup,'.form-check-input.ng-untouched.ng-pristine.ng-valid')
         delDoc.clicksOnDelete()
         cy.get('.abp-toast-message').should('have.text',' تمت عملية ( تعطيل وثيقة ) بنجاح ')
         
         cy.FindSpeceficContent(data.docNameSup,'.form-check-input.ng-untouched.ng-pristine.ng-valid')
         delDoc.clicksOnDelete()
         cy.get('.abp-toast-message').should('have.text','تمت عملية ( تفعيل وثيقة ) بنجاح ')

       })
    })

    it('AdvancFilter',()=>
    {
     cy.fixture('usersData').then(function(data)
     {
         addDoc.AdvancedFilter(data.sector,data.dep,data.type,"مفعل")
         cy.FindSpeceficContent()
         
 
     })
    })
    

    it('AdminDeleteDocument',()=>
   {
    cy.fixture('usersData').then(function(data)
    {
        cy.FindSpeceficContent(data.docNameSup,'.icon-trash')
        delDoc.clicksOnDelete()
        cy.get('.abp-toast-message').should('have.text',data.delMess)

    })
})



})