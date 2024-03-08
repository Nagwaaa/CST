import userManagementPage from '../Pages/userManagementPage'

describe('AdminManageUsers',()=>
{
    const users=new userManagementPage()

    beforeEach(()=>
    {
        cy.visit('/')
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(1000)
           users.getUsersManagment()
           
        })
    })

    it("AddUsersAdmin",()=>
    {
        users.ClickOnAddUser()
        users.AddUsers("AAmostafa","امل مصطفي","Aml Mostafa","abc@mail.com","0576544443","QC","المحافظ","الإدارة العامة للقانونية","إدارة المخالفات","افراح هاشم حسين الجفري")
        cy.wait(1000)
       
    })

    it("UpdateUsersAdmin",()=>
    {
        cy.SearchFor('#filterTxt','AAmostafa')
        cy.wait(1000)
        users.clicksOnUpdate()
        users.UpdateUsers("امل مصطفي","Aml Mostafa","abc@mail.com","0576544443","QC","المحافظ","الإدارة العامة للقانونية","إدارة المخالفات","افراح هاشم حسين الجفري")
    })


    it("GivePermissionToUsers",()=>
    {
        let arr=[" إدارة الاستبيانات "," إدارة أخبار الهيئة "," إدارة مكتبة الوثائق "," إدارة روزنامة الهيئة "]
        cy.SearchFor('#filterTxt','AAmostafa')
        cy.wait(2000)
        users.GiveUserPermission(...arr)
        cy.wait(2000)
    })

    it("AdvancedFilter",()=>{
        let perm=["إدارة الاستبيانات","إدارة أخبار الهيئة"]
        users.AdvancedSearch("المحافظ","الإدارة العامة للقانونية","إدارة المخالفات","افراح هاشم حسين الجفري",' معرف يدويا ',...perm)
    })

    it.only("DownloadUsersAndPermission",()=>
    {
        let perm=["إدارة الاستبيانات","إدارة أخبار الهيئة"]
        users.AdvancedSearch("المحافظ","الإدارة العامة للقانونية","إدارة المخالفات","افراح هاشم حسين الجفري",' معرف يدويا ',...perm)
        users.DownloadExcellSheet()
        cy.readFile('C:/Users/Ts/Desktop/CST/cypress/files/downloads/file/UsersList.xlsx').should('exist')
    })

})