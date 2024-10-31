// function opening the side menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.left === '-250px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-250px';
  }
}

// function to open the documents in ..-docs.html 
function openDocs(name){
  window.open(name)
}

// function to register 
function registerMun(lng){
  if (lng === 'en') {
  	alert("Currently unavailable, contact us at chaumun.lcdg@gmail.com")
  }
  else { // aka fr
  	alert("Insdisponible actuellement, contactez nous à chaumun.lcdg@gmail.com")
  }
}

function giveMeTheDocs(lng){
  if (lng=='en') {
    window.open('doc/ressources/en/Legal-Dimensions-of-Sea-Level-Rise-Pacific-Perspectives.pdf')
    window.open('doc/ressources/en/The-Impact-of-Sea-Level-Rise-on-Developing-Countries.pdf')
    window.open('doc/ressources/en/The-rate-of-global-sea-level-rise-doubled.pdf')
    window.open('doc/ressources/en/WB-Kiribati-Country-Profile.pdf')
    window.open('doc/ressources/en/Bibliography-sitography.docx')
  }
  else{
    alert('Rien pour le moment... Nothing for now...')
  }
}