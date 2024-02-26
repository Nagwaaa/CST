

class homePage
{
   
    getContainerMenu()
    {
        return cy.get('.header-content-item.icon-menu-container')
    }

   // function to get Date/time of today
    GetCurrentTime()
    {
        const now = new Date();
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const day = String(now.getDate()).padStart(2, '0')
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        
        const final=`${year}-${month}-${day}T${hours}:${minutes}`
        return final
    }
}

 export default homePage;