function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}

function downloadDocuments(nom) {
    const lien = document.createElement('a');
    lien.href = `https://synbi0se.github.io/MUN-site/doc/${nom}`;
    lien.download = `https://synbi0se.github.io/MUN-site/doc/${nom}`;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}
function registerMun(lng){
  if (lng === "EN") {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSewkJ_-bIDBAOy204Jz51rcxLKGvVYYsPnEginEhoc3rq9ZLw/viewform?usp=sf_link");
    
  } else {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfYGK3mRNtdHU3td72VgmclpRCcuZYbGdaNJpmpu32LjDAdIQ/viewform?usp=sf_link");
    
  }
}

function invitation(language) {
  const box = document.getElementById('frame')  
 if (language === 'fr') {
  box.innerHTML = '<iframe src="doc/Invitation to Chaumun 2025.pdf" frameborder="0"></iframe>' ;
 }
 if (language === 'en') {
  box.innerHTML = '<iframe src="doc/Invitation au Chaumun 2025.pdf" frameborder="0"></iframe>' ;
 }
 if (language === 'de') {
  box.innerHTML = '<iframe src="doc/Einladung zum Chaumun.pdf" frameborder="0"></iframe>' ;
 }

}


// document.addEventListener("DOMContentLoaded", function() {
//     textin = '';
//     const writeIn = document.getElementById("background");
//     writeIn.innerHTML = textin;
// });
