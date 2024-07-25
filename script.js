function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}

// function square() {
//     const chapeau = document.getElementById('photo');
       
    
// }
// const device_height = window.innerHeight;
// console.log(device_height);
// const frontpage = document.getElementById('frontpage');
// frontpage.style.top = -device_height;

document.addEventListener("DOMContentLoaded", function() {
    textin = '<div id="frontpage"><div class="row"><div class="col-lg-4 col-md-12 col-xs-12"><div id="imagebox"><img src="img/logo.png" alt="LOGO CHAU\'MUN"></div></div><div class="col-lg-4 col-md-12 col-xs-12"><div id="text"><div><div id="title"><h1>CHAU\'MUN</h1></div><div id="subtitle">Votre créativité est la clé de votre succès</div></div></div></div></div></div>' ;
    const writeIn = document.getElementById("background");
    writeIn.innerHTML = textin;
});