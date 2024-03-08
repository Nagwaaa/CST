import CalendarPage from '../Pages/CalendarPage'
import NewsManagement from '../Pages/NewsManagement'

describe('AdminManageUsers',()=>
{
    let upadteValue
    const calendar=new CalendarPage()
    const news=new NewsManagement()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           calendar.getCalendarManagment()
           
        })
    })

    it("AddCalendarAdmin",()=>
    {
        calendar.clicksOnaddEvents()
        calendar.AddUpdateCalender("testttt2","desc","23","4","2024","11","30","23","4","2024","11","35","25","4","2024","10","45",'منتدى','قطاع الطيف الترددي','الإدارة العامة لتخطيط الطيف الترددي','خارجي','egypt','dokki')
        cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
    })

    it("AddCalendarSupportENAdmin",()=>
    {
        calendar.clicksOnaddEvents()
        calendar.clicksOnSupport()
        calendar.AddUpdateCalenderSupport("testttt2","testttt2EN","desc","descEN","23","4","2024","11","30","23","4","2024","11","35","25","4","2024","10","45",'منتدى','قطاع الطيف الترددي','الإدارة العامة لتخطيط الطيف الترددي','خارجي','egypt','dokki')
        cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
    })


    it.only("AdvancedFilterCalender",()=>
    {
        calendar.AdvancedFilter('منتدى','خارجي','قطاع الطيف الترددي','الإدارة العامة لتخطيط الطيف الترددي',"2024","4","22","2024","4","28","2024","4","22","2024","4","28","2024","4","22","2024","4","28")
    })

    it("UpdateCalenderAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
         news.SearchForNewsEdit('testttt2','.btn.btn-outline-primary.ng-star-inserted')
         cy.wait(1000)
         cy.get('#support').as('checkbox')
         .invoke('is', ':checked')
         .then(checked => {
          if (checked) {
            calendar.AddUpdateCalenderSupport("testttt2Sup","testttt2EN","desc","descEN","23","4","2024","11","30","23","4","2024","11","35","25","4","2024","10","45",'منتدى','قطاع الطيف الترددي','الإدارة العامة لتخطيط الطيف الترددي','خارجي','egypt','dokki')
            upadteValue = data.newNameUpdate
            cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
          }else
          {
            calendar.AddUpdateCalender("testttt2edit","desc","23","4","2024","11","30","23","4","2024","11","35","25","4","2024","10","45",'منتدى','قطاع الطيف الترددي','الإدارة العامة لتخطيط الطيف الترددي','داخلي')
            upadteValue = data.newNameUpdate
            cy.get('.abp-toast-message').should('have.text','تم حفظ البيانات بنجاح')
          }
        
       })
    })
  })


    it("DeleteCalendarAdmin",()=>
    {
   
        cy.fixture('usersData').then(function(data)
       {
         news.SearchForNewsEdit('testttt2','.icon-trash')
         news.clicksOnDelete()
         cy.get('.abp-toast.abp-toast-success').should('have.text','  تم الحذف بنجاح')
         
       })
    })

    
})