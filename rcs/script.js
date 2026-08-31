const mailList = [];
const committeeList = [];
const attribList = [];

document.addEventListener('DOMContentLoaded', function() {
    let N = 16; // Number of sponsors
    let altIs ; // alt displayed
    
    // For alt text
    if (window.location.pathname.includes('/fr/')) {
        altIs = "Un partenaire"
    }
    if (window.location.pathname.includes('/en/')) {
        altIs = "A sponsor"
    }
    if (window.location.pathname.includes('/es/')) {
        altIs = "Un mecenas"
    }
    
    // First sponsors section : Randomly selected
    let Sdiv1 = document.getElementById('s1');
    let Lst = [];
    if (Sdiv1 !== null & innerWidth<=580) { // in case of a small width window, div will not appear
        Sdiv1.remove()
    }
    else if (Sdiv1 !== null) {
        while (Lst.length < 6){
            let Random = Math.floor(Math.random() * N) + 1;
            if (!Lst.includes(Random)) {
                Lst.push(Random);
            }
            Lst.sort((a, b) => a - b);
        }
        for(let i = 0; i<6; i++) { 
          Sdiv1.innerHTML += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s${Lst[i]}.webp" alt="${altIs}"></div>`;
        }
    }
    
    // Second sponsors section : All sponsors   Only in home.html
    if (window.location.pathname.endsWith('home.html')) {
        let Sdiv2 = document.getElementById('s2');
        for (i = 0; i < N; i++) {
            Sdiv2.innerHTML += `<div class="col-xs-6 col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s${i+1}.webp" alt="${altIs}"></div>`;
        }
    }
});

function openDocs(doc) {
  window.open(doc);
}
function error(message) {
  alert(message)
}