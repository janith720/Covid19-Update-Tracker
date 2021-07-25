//tab control
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove('active')
            
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')   
    })
})

//API'S URL
const apiUrl = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

        // Function that getting details from API
        async function getCovidUpadate(){
            const responce = await fetch(apiUrl);
            const details = await responce.json();
            //Numbers formatter
            const formatter = new Intl.NumberFormat('en');

            const { data } = details;
            const { update_date_time, local_new_cases, local_total_cases, local_deaths, local_new_deaths, local_recovered, global_new_cases, global_total_cases, global_deaths, global_new_deaths, global_recovered} = data;
            
            //Printing local data
            document.getElementById('timendate').innerHTML = update_date_time;
            document.getElementById('LTotalCases').innerHTML = formatter.format(local_total_cases);
            document.getElementById('LNewCases').innerHTML = formatter.format(local_new_cases);
            document.getElementById('LNewDeaths').innerHTML = formatter.format(local_new_deaths);
            document.getElementById('LRecovered').innerHTML = formatter.format(local_recovered);
            document.getElementById('LTotalDeaths').innerHTML = formatter.format(local_deaths);
            //Printing global data
            document.getElementById('Gtimendate').innerHTML = update_date_time;
            document.getElementById('GTotalCases').innerHTML = formatter.format(global_total_cases);
            document.getElementById('GNewCases').innerHTML = formatter.format(global_new_cases);
            document.getElementById('GNewDeaths').innerHTML = formatter.format(global_new_deaths);
            document.getElementById('GRecovered').innerHTML = formatter.format(global_recovered);
            document.getElementById('GTotalDeaths').innerHTML = formatter.format(global_deaths);
        }
        getCovidUpadate();

// $('LTotalCases').each(function(){
//     const This = $(this);
//     $({Count: This.text()}).animate(
//         {Count: This.parent().attr
//         ("data-count")},
//         {
//             duration: 2000,
//             easing: "linear",
//             step: function(){
//                 This.text(Math.floor(this.Count)
//                 )
//             },
//         }
//     )
// })
