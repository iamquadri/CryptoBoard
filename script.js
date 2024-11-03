

// theme toogle 
const themeBtn = document.querySelector('.nav_theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        themeBtn.innerHTML = `<i class="uil uil-sun"><i/>`
        // save theme to local storage
        localStorage.setItem('currentTheme', 'dark-theme')
    } else {
        themeBtn.innerHTML = `<i class="uil uil-moon"></i>`
        // save theme local storage
        localStorage.setItem('currentTheme', '')
    }

})

document.body.className = localStorage.getItem('currentTheme');























// show/hide sidebar menu
const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.querySelector('.sidebar_close-btn');
const openSidebarBtn = document.querySelector('.nav_menu-btn');


openSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});



















const chart = document.querySelector('#chart').getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['January', 'february', 'March', 'April', 'May',  'June', 'July', 'August', 
            'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: "BTC",
                    data: [29374, 33572, 496321, 159095, 257828, 36684, 33572, 39974, 48847, 48116, 
                        61004],
                    borderColor: 'blue',
                    borderwidth:  2
                },
                {
                    label: "ETH",
                    data: [31500, 41000, 88800, 26000, 46000, 312698, 350000, 3000, 286566, 24832, 
                        150000, 170000],
                    borderColor: "red",
                    borderwidth: 2
                }
            ]
    },
    options: {
        responsive: true
    }
})


// print('a') {
//     for I in range (1, 5);
//     if (i == 6) {
//         break
//     } else {
//         print('b')    
//     }

// };




