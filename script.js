// function opening the side menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.left === '-250px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-250px';
  }
}

// function for the button in invitation in ..-download.html
function invitation(language) {
  const box = document.getElementById('frame');
  const en = document.getElementById('en');
  const fr = document.getElementById('fr');
  const de = document.getElementById('de');
  en.style.backgroundColor = '#007D45';
  fr.style.backgroundColor = '#007D45';
  de.style.backgroundColor = '#007D45';
  if (language === 'en') {
    box.innerHTML = '<iframe src="doc/Invitation_to_Chaumun_2025.pdf" frameborder="0"></iframe>' ;
    en.style.backgroundColor = '#004828';
  }
  if (language === 'fr') {
    box.innerHTML = '<iframe src="doc/Invitation_au_Chaumun_2025.pdf" frameborder="0"></iframe>' ;
    fr.style.backgroundColor = '#004828';
  }
  if (language === 'de') {
    box.innerHTML = '<iframe src="doc/Einladung_zum_Chaumun.pdf" frameborder="0"></iframe>' ;
    de.style.backgroundColor = '#004828';
  }
}

// function to open the documents in ..-download.html 
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

