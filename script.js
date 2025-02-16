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
    // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeUniZZ7U4VkodAhQEj9PAaJqHmQQDrlnRqKume9MSvD_VzAw/viewform");
    alert("Contact us at chaumun.lcdg@gmail.com");
  }
  else { // aka fr
  	// window.open("https://docs.google.com/forms/d/e/1FAIpQLSclhP-3-5QGQQW0F7qYrmo_QeC3l8o711TbNGzw6qu4Ddv-6g/viewform");
    alert("Contactez nous à chaumun.lcdg@gmail.com");
  }
}

// function to prevent the user a button is not working
function alert(lng){
  if (lng === 'en') {
  	alert("Nothing for now...");
  }
  else { // aka fr
  	alert("Rien pour le moment...");
  }
}

// easter egg
function louis(){
  const logo = document.getElementById('L');
  logo.innerHTML = '<img src="https://raw.githubusercontent.com/Synbi0se/logo-MUN/refs/heads/main/logo_louis.png" alt="LOGO CHAU\'MUN">'
}