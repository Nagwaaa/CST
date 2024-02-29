import AddMediaPage from "../Pages/AddMediaPage";
import homePage from "../Pages/homePage";

describe('Admin Manage media',()=>{
    beforeEach(()=>
    {
        cy.visit('/')
        cy.wait(5000)
        cy.fixture('usersData').then(function(userPassword)
        {
           cy.login(userPassword.username,userPassword.password)
           cy.wait(2000)
           const MainMenu= new homePage
           MainMenu.getMainMenu();
           MainMenu.getSettingsMenu();
           MainMenu.getMediaList();
        })
 
    })

    it("Test Adding New Media Image Type" , function(){

        cy.fixture('usersData').then(function(data)
         {
            const addMedia= new AddMediaPage;
            //Open the new media page
            addMedia.ClickOnAddMediaBtn();
            //call the add function for add new media with image type
            addMedia.AddNeWMediaImagewithSupport(data.MediaTitleAR,data.MediaTitleEN,
               data.HashTag,
               data.MediaType_img,
               data.image,data.year,data.month,data.day,data.ToastMessage);
         })
      })

       it("Test Adding New Media Video Type" , function(){
         
        cy.fixture('usersData').then(function(data)
         {
            const addMedia= new AddMediaPage;
            addMedia.ClickOnAddMediaBtn();
            addMedia.AddUpdateNeWMediaVideowithoutSupport(data.MediaTitleVAR,
               data.HashTag,data.MediaType_video,
               data.VideoCode,data.year,data.month,data.day,data.ToastMessage);
            
         })
      })
      it("Update media with vidoe type" , function(){

         cy.fixture('usersData').then(function(data)
         {
            const addMedia= new AddMediaPage;
            addMedia.SearchForMedia(data.MediaTitleVAR,".btn.btn-outline-primary.ng-star-inserted");
            cy.wait(2000);
            cy.get('#support').should('not.be.checked')
            .then(($checkbox) => {  
              if ($checkbox.is(':checked')) {  
               addMedia.AddNeWMediaImagewithSupport(data.MediaTitleAR,data.MediaTitleEN,
                  data.HashTag,
                  data.MediaType_img,
                  data.image,data.year,data.month,data.day);
              }
              else{
               addMedia.clearhashtag();
               addMedia.AddUpdateNeWMediaVideowithoutSupport(data.MediaTitleVForEdit,
                  data.HashTagForEdit,data.MediaType_video,
                  data.VideoCodeForEdit,data.yearForEdit,data.monthForEdit,data.dayForEdit,data.ToastMessage);
                  cy.get('#filterTxt').clear();
                  
                  
               }

              
      });
            
            
         })
       })
       it("Delete Media From the Media List" , function(){
         
         cy.fixture('usersData').then(function(data)
          {
             const addMedia= new AddMediaPage;
             addMedia.SearchForMedia(data.MediaTitleAR,".btn.btn-outline-danger.ng-star-inserted");
             cy.get("#confirm").click();
             cy.get(".abp-toast-message").should("have.text",data.ToastMsgFordelete);
             cy.get('#filterTxt').clear();
             
          })
       })

});
