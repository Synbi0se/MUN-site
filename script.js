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
  window.open(name);
}

// function to register 
function registerMun(lng){
  if (lng === 'en') {
  	alert("Currently unavailable, contact us at chaumun.lcdg@gmail.com");
  }
  else { // aka fr
  	alert("Insdisponible actuellement, contactez nous à chaumun.lcdg@gmail.com");
  }
}

function alert(lng){
  if (lng === 'en') {
  	alert("Nothing for now...");
  }
  else { // aka fr
  	alert("Rien pour le moment...");
  }
}