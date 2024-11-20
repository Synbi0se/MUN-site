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
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeUniZZ7U4VkodAhQEj9PAaJqHmQQDrlnRqKume9MSvD_VzAw/viewform");
  }
  else { // aka fr
  	window.open("https://docs.google.com/forms/d/e/1FAIpQLSclhP-3-5QGQQW0F7qYrmo_QeC3l8o711TbNGzw6qu4Ddv-6g/viewform");
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