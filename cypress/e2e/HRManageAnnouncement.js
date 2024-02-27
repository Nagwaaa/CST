import AddAnnouncementPage from '../Pages/AddAnnouncementPage'
import deleteDocPage from '../Pages/deleteDocPage'



describe('AnnouncementManagementHR',()=>
{
    const announc=new AddAnnouncementPage()
    const delDoc=new deleteDocPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           announc.getAnnouncementMenu()
        })
    })

    it('AddAnnouncementHR',()=>
    {
        announc.clicksOnAddAnnouncement()
        cy.fixture('usersData').then(function(data)
        {
            announc.addAnnouncement(data.annoucTitle,data.announcementDesc,data.day,data.month,data.year,data.day,data.month,data.year)
            delDoc.clicksOnDelete()
            cy.wait(1000)
        })
       

    })

    it('UpdateAnnouncementHR',()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            announc.SearchForAnnouncementEit(data.annoucTitle,'.btn.btn-outline-primary.ng-star-inserted')
            announc.addAnnouncement(data.annoucTitle,data.announcementDesc,data.day,data.month,data.year,data.day,data.month,data.year)
            delDoc.clicksOnDelete()
            cy.wait(1000)
        })
       

    })


    it('DeleteAnnouncementHR',()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            announc.SearchForAnnouncementEit(data.annoucTitle,'.icon-trash')
            delDoc.clicksOnDelete()
            
        })
       

    })
})