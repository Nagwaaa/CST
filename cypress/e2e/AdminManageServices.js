import ServicesManagmentPage from '../Pages/ServicesManagmentPage'

describe('AdminManageServices',()=>
{
    const service=new ServicesManagmentPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           service.getServicesManagment()
           
        })
    })


    it("AdminAddServices",()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            service.clisksOnAddService()
            let relatedServicesArray=["إضافة مركز طبي","مطالبة طبية"]
            service.addServices(data.Sername,"Assurence Request","https://www.google.com",'No','مفعل','files/ev4.jpg','files/ev4.jpg','الموارد البشرية','رحلات العمل','ERP',5,5,"DescAR","DescEN","DocAR","DocEN",data.desc,"ProcudureEN","QuestionAR","answerAR","QuestionEN","answerEN",...relatedServicesArray)
            cy.SearchFor("#filterTxt",data.Sername)
            cy.get('.datatable-body-cell-label > span.ng-star-inserted').first().should('have.text',data.Sername)
        })
        
    })

    it("AdminUpdateServices",()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            let relatedServicesArray=["إضافة مركز طبي","مطالبة طبية"]
            cy.SearchFor("#filterTxt",data.Sername)
            cy.wait(1000)
            service.ClicksonUpdate()
            service.deleteServicesDetails()
            service.addServices(data.UpdatServName,"AutomationServiceEN","https://www.google.com",'yes','غير مفعل','files/ev4.jpg','files/ev4.jpg','الموارد البشرية','رحلات العمل','ERP',5,5,"DescAR","DescEN","DocAR","DocEN",data.desc,"ProcudureEN","QuestionAR","answerAR","QuestionEN","answerEN",...relatedServicesArray)
            cy.wait(1000)
            cy.SearchFor("#filterTxt",data.UpdatServName)
        })
    })


    it("ViewServicesDetails",()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            cy.SearchFor("#filterTxt",data.UpdatServName)
            cy.wait(1000)
            service.clicksOnViewSerivces()
            cy.get('div[_ngcontent-ng-c2092275115=""] > .title').should('have.text',data.UpdatServName)
        })
    })


    it("DeActivateServices",()=>
    {
       cy.fixture('usersData').then(function(data)
       {
            cy.SearchFor("#filterTxt",data.UpdatServName)
            cy.wait(1000)
            cy.get('.datatable-body-cell-label > .form-check > .form-check-label').invoke('text').then((active)=>
            {
                if(active == 'غير مفعل')
                {
                    cy.log("This services is already DeActivate")
                }else
                {
                    service.activateDeacticateServices()
                    cy.get('.ng-animating > .abp-toast > .abp-toast-content > .abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
                }
            })
        })   
    })

    it("ActivateServices",()=>
    {
        cy.fixture('usersData').then(function(data)
        {
            cy.SearchFor("#filterTxt",data.UpdatServName)
            cy.wait(1000)
            cy.get('.datatable-body-cell-label > .form-check > .form-check-label').invoke('text').then((active)=>
            {
                if(active == 'مفعل')
                {
                    cy.log("This services is already Activate")
                }else
                {
                    service.activateDeacticateServices()
                    cy.get('.ng-animating > .abp-toast > .abp-toast-content > .abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
                }
            })
        })
        
    })

     it("AdvancedSearchForServices",()=>
     {
        cy.fixture('usersData').then((data)=>
       {
        service.AdvancedSerach(data.SmainCategory,data.SsubCategory,data.Sstatus)
        cy.SearchFor("#filterTxt",data.UpdatServName)
        cy.get('.datatable-body-cell-label > span.ng-star-inserted').should('have.text',data.UpdatServName)
        cy.get(':nth-child(2) > .datatable-body-cell-label > :nth-child(2)').should('have.text',data.SmainCategory)
        cy.get(':nth-child(3) > .datatable-body-cell-label > :nth-child(2)').should('have.text',data.SsubCategory)
        cy.get('.datatable-body-cell-label > .form-check > .form-check-label').should('have.text',data.Sstatus)
       
    })
  })

})
