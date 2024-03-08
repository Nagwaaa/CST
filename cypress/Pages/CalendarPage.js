class CalendarPage
{
    getCalendarManagment()
    {
        cy.get(".icon-menu-container").click()
        cy.get("#CMSService\\:\\:Menu\\:Settings").click('center')
        cy.get('#CMSService\\:\\:Menu\\:CalenderSetting').click()
    }

    clicksOnaddEvents()
    {
        cy.get('.btn.btn-sm.btn-primary ').click()
    }

    AddUpdateCalender(name,desc,day,month,year,hour,min,eday,emonth,eyear,ehour,emin,pday,pmonth,pyear,phour,pmin,type,sector='',dept='',place='',city='',address='')
    {
        cy.get('#titleAr').clear().type(name)
        cy.get('#ContentAr').clear().type(desc)
        cy.get(".date-picker-icon").first().click()
        cy.get('[title="Select year"]').select(year)
        cy.get('[title="Select month"]').select(month)
        cy.get('.btn-light.ng-star-inserted').contains(day).click()
        cy.get('[aria-label="Hours"]').first().clear().type(hour)
        cy.get('[aria-label="Minutes"]').first().clear().type(min)

        cy.get(".date-picker-icon").eq(1).click()
        cy.get('[title="Select year"]').select(eyear)
        cy.get('[title="Select month"]').select(emonth)
        cy.get('.btn-light.ng-star-inserted').contains(eday).click()
        cy.get('[aria-label="Hours"]').eq(1).clear().type(ehour)
        cy.get('[aria-label="Minutes"]').eq(1).clear().type(emin)

        cy.get(".date-picker-icon").last().click()
        cy.get('[title="Select year"]').select(pyear)
        cy.get('[title="Select month"]').select(pmonth)
        cy.get('.btn-light.ng-star-inserted').contains(pday).click()
        cy.get('[aria-label="Hours"]').last().clear().type(phour)
        cy.get('[aria-label="Minutes"]').last().clear().type(pmin)

        cy.get(':nth-child(9) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(sector)
        cy.get('.ng-option.ng-star-inserted').click()

        
        cy.get(':nth-child(10) > .ng-untouched > .ng-select-searchable > .ng-select-container').type(dept)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get(':nth-child(11) > .ng-select-searchable > .ng-select-container').clear().type(type)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()


        if(place ==='داخلي' || place ==='Inside' )
        {
            cy.get(':nth-child(12) > .ng-select-searchable > .ng-select-container').type(place)
            cy.get('.ng-option.ng-star-inserted').click()
        }else if(place ==='خارجي' || place ==='Outside')
        {
              cy.get(':nth-child(12) > .ng-select-searchable > .ng-select-container').type(place)
              cy.get('.ng-option.ng-star-inserted').click()
              cy.get('#city').clear().type(city)
              cy.get('#address').clear().type(address)
        }else{
            cy.log('Invalid Input')
        }

        cy.get('.btn.btn-primary').click()
        cy.get('#confirm').click()


    }

    clicksOnSupport()
    {
        cy.get('#support').click()
    }

    AddUpdateCalenderSupport(nameAR,nameEN,descAR,descEN,day,month,year,hour,min,eday,emonth,eyear,ehour,emin,pday,pmonth,pyear,phour,pmin,type,sector='',dept='',place='',city='',address='')
    {
        cy.get('#titleAr').clear().type(nameAR)
        cy.get('#titleEn').clear().type(nameEN)
        cy.get('#ContentAr').clear().type(descAR)
        cy.get('#contentEn').clear().type(descEN)
        cy.get(".date-picker-icon").first().click()
        cy.get('[title="Select year"]').select(year)
        cy.get('[title="Select month"]').select(month)
        cy.get('.btn-light.ng-star-inserted').contains(day).click()
        cy.get('[aria-label="Hours"]').first().clear().type(hour)
        cy.get('[aria-label="Minutes"]').first().clear().type(min)

        cy.get(".date-picker-icon").eq(1).click()
        cy.get('[title="Select year"]').select(eyear)
        cy.get('[title="Select month"]').select(emonth)
        cy.get('.btn-light.ng-star-inserted').contains(eday).click()
        cy.get('[aria-label="Hours"]').eq(1).clear().type(ehour)
        cy.get('[aria-label="Minutes"]').eq(1).clear().type(emin)

        cy.get(".date-picker-icon").last().click()
        cy.get('[title="Select year"]').select(pyear)
        cy.get('[title="Select month"]').select(pmonth)
        cy.get('.btn-light.ng-star-inserted').contains(pday).click()
        cy.get('[aria-label="Hours"]').last().clear().type(phour)
        cy.get('[aria-label="Minutes"]').last().clear().type(pmin)

        cy.get(':nth-child(9) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(sector)
        cy.get('.ng-option.ng-star-inserted').click()

        
        cy.get(':nth-child(10) > .ng-untouched > .ng-select-searchable > .ng-select-container').type(dept)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get(':nth-child(11) > .ng-select-searchable > .ng-select-container').clear().type(type)
        cy.get('.ng-option.ng-star-inserted.ng-option-marked').click()


        if(place ==='داخلي' || place ==='Inside' )
        {
            cy.get(':nth-child(12) > .ng-select-searchable > .ng-select-container').type(place)
            cy.get('.ng-option.ng-star-inserted').click()
        }else if(place ==='خارجي' || place ==='Outside')
        {
              cy.get(':nth-child(12) > .ng-select-searchable > .ng-select-container').type(place)
              cy.get('.ng-option.ng-star-inserted').click()
              cy.get('#city').clear().type(city)
              cy.get('#address').clear().type(address)
        }else{
            cy.log('Invalid Input')
        }

        cy.get('.btn.btn-primary').click()
        cy.get('#confirm').click()


    }

    GetDateWithSateFormat(year,month,day)
  {
    const dateString=new Date(year,month,day)
    const date = new Date(dateString);

     year = date.getFullYear(); 
     month = date.getMonth(); 
     day = date.getDate()+1; 

    const formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;

    return formattedDate
  }


    AdvancedFilter(type,place,sector,dept,syear,smon,sday,eyear,emon,eday,pyear,pemon,pday,dyear,dmon,dday,xyear,xmon,xday,zyear,zmon,zday)
    {
        cy.get('.icon-filter').click()
        cy.get(':nth-child(1) > .ng-select-searchable > .ng-select-container').type(type)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get('.row > :nth-child(2) > .ng-select-searchable > .ng-select-container').type(place)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get(':nth-child(3) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(sector)
        cy.get('.ng-option.ng-star-inserted').click()

        cy.get(':nth-child(4) > app-ng-select-auto-complete.ng-untouched > .ng-select-searchable > .ng-select-container').type(dept)
        cy.get('.ng-option.ng-star-inserted').click()

        //cy.get('.filter-actions > .btn-primary').click()


        const pubDateFrom=this.GetDateWithSateFormat(syear,smon,sday)
        const pubDateTo=this.GetDateWithSateFormat(eyear,emon,eday)

        const startDateFrom=this.GetDateWithSateFormat(pyear,pemon,pday)
        const startDateTo=this.GetDateWithSateFormat(dyear,dmon,dday)

        const ensDateFrom=this.GetDateWithSateFormat(xyear,xmon,xday)
        const endDateTo=this.GetDateWithSateFormat(zyear,zmon,zday)
        
    
       // cy.get('.filter-section > .btn').click()
    
        cy.get(".date-picker-icon").first().click()
        cy.get('[title="Select year"]').select(syear)
        cy.get('[title="Select month"]').select(smon)
        cy.get('.btn-light.ng-star-inserted').contains(sday).click()
    
        cy.get(".date-picker-icon").eq(1).click()
        cy.get('[title="Select year"]').select(eyear)
        cy.get('[title="Select month"]').select(emon)
        cy.get('.btn-light.ng-star-inserted').contains(eday).click()
    
        cy.get(".date-picker-icon").eq(2).click()
        cy.get('[title="Select year"]').select(pyear)
        cy.get('[title="Select month"]').select(pemon)
        cy.get('.btn-light.ng-star-inserted').contains(pday).click()
    
        cy.get(".date-picker-icon").eq(3).click()
        cy.get('[title="Select year"]').select(dyear)
        cy.get('[title="Select month"]').select(dmon)
        cy.get('.btn-light.ng-star-inserted').contains(dday).click()

        cy.get(".date-picker-icon").eq(4).click()
        cy.get('[title="Select year"]').select(xyear)
        cy.get('[title="Select month"]').select(xmon)
        cy.get('.btn-light.ng-star-inserted').contains(xday).click()

        cy.get(".date-picker-icon").eq(5).click()
        cy.get('[title="Select year"]').select(zyear)
        cy.get('[title="Select month"]').select(zmon)
        cy.get('.btn-light.ng-star-inserted').contains(zday).click()

    
        cy.get('.filter-actions > .btn-primary').click()
        cy.wait(1000)
     
        cy.get('.datatable-scroll.ng-star-inserted').find('.datatable-row-wrapper.ng-star-inserted').each(($element,index,$list)=>
        {
          let pdat =$element.find('.item').eq(3).text()
          {
            let arr =pdat.split(':')
            let dd=arr[1].trim()
            cy.log(dd)
            expect(new Date(dd)).to.be.gte(new Date(pubDateFrom))
            expect(new Date(dd)).to.be.lte(new Date(pubDateTo))
          }

          let pdat2 =$element.find('.item').eq(4).text()
          {
            let arr2 =pdat2.split(':')
            let dd2=arr2[1].trim()
            let OnlyDate=dd2.split(' ')
            let Sdate=OnlyDate[0].trim()
            expect(new Date(Sdate)).to.be.gte(new Date(startDateFrom))
            expect(new Date(Sdate)).to.be.lte(new Date(startDateTo))
          }
            
          
          let pdat3 =$element.find('.item').eq(5).text()
          {
            let arr3 =pdat3.split(':')
            let dd4=arr3[1].trim()
            let OnlyDate=dd4.split(' ')
            let edate=OnlyDate[0].trim()
            expect(new Date(edate)).to.be.gte(new Date(ensDateFrom))
            expect(new Date(edate)).to.be.lte(new Date(endDateTo))
          }
        })

    }


}
export default CalendarPage;