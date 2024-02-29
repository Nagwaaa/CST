import sectorAddUpdateDocPage from '../Pages/sectorAddUpdateDocPage'
import deleteDocPage from '../Pages/deleteDocPage'

describe('SctorManageDocuments',()=>
{
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

    it('SectorAddDocument',()=>
    {   
       
       cy.fixture('usersData').then(function(data)
       {
         addDoc.clickOnAddDocument()
         addDoc.addUpadteDocument(data.docName,data.image,data.sectorDeptartment,data.type,data.year,data.month,data.day,"nooote")
         //cy.get(".abp-toast-message").last().should('have.text',data.message)

       })

    })
    
})