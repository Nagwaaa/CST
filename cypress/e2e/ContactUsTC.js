import ContactUSPage from '../Pages/ContactUSPage'

describe('AdminManageUsers',()=>
{
    const contact=new ContactUSPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           contact.getContactUsManagment()
           
        })
    })


    it("UpdateContactAdmin",()=>
    {
        let inqEmail=['abc1@mail.com','abc2@mail.com']
        let repEmail=["abc3@mail.com","abc4@mail.com"]
        let sugEmail=["abc5@mail.com","abc6@mail.com"]
        
        contact.deleteContactUsDetails()
        contact.UpdateContactDetails('n@mail.com','n@mail.com',"56788999","765432","877654",'777','http://www.google.com',inqEmail,repEmail,sugEmail)
        cy.get('.abp-toast.abp-toast-success').should('have.text','  تم حفظ البيانات بنجاح')
    })
})