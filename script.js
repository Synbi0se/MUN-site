function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}

function downloadDocuments() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfYGK3mRNtdHU3td72VgmclpRCcuZYbGdaNJpmpu32LjDAdIQ/viewform?usp=sf_link")
}



// document.addEventListener("DOMContentLoaded", function() {
//     textin = '';
//     const writeIn = document.getElementById("background");
//     writeIn.innerHTML = textin;
// });
