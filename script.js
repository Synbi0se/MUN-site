function toggleMenu() {
  const menu = document.getElementById('menu');
  const btn = document.getElementById('menu-btn')
  if (menu.style.left === '-250px') {
    menu.style.left = '0';
    btn.style.width = '250px';
  } else {
    menu.style.left = '-250px';
    btn.style.width = '105px'
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
  }
  else {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfYGK3mRNtdHU3td72VgmclpRCcuZYbGdaNJpmpu32LjDAdIQ/viewform?usp=sf_link");
  }
}

function invitation(language) {
  const box = document.getElementById('frame');
  const en = document.getElementById('en');
  const fr = document.getElementById('fr');
  const de = document.getElementById('de');
  en.style.backgroundColor = '#007D45';
  fr.style.backgroundColor = '#007D45';
  de.style.backgroundColor = '#007D45';
  if (language === 'en') {
    box.innerHTML = '<iframe src="doc/Invitation to Chaumun 2025.pdf" frameborder="0"></iframe>' ;
    en.style.backgroundColor = '#004828';
  }
  if (language === 'fr') {
    box.innerHTML = '<iframe src="doc/Invitation au Chaumun 2025.pdf" frameborder="0"></iframe>' ;
    fr.style.backgroundColor = '#004828';
  }
  if (language === 'de') {
    box.innerHTML = '<iframe src="doc/Einladung zum Chaumun.pdf" frameborder="0"></iframe>' ;
    de.style.backgroundColor = '#004828';
  }
}
