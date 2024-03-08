import NewsManagement from "./NewsManagement";


class TawasolCenterPage extends NewsManagement
{
    getTawasolMenu()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get("#CMSService\\:\\:Menu\\:AdvertismentSetting").click()
    }



}
export default TawasolCenterPage;