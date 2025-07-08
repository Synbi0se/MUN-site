document.addEventListener('DOMContentLoaded', function() {
    let N = 12;
    // First sponsors section : Randomly selected
    let Sdiv1 = document.getElementById('s1');
    let Lst = [];
    if (Sdiv1 !== null) {
        while (Lst.length < 6){
            let Random = Math.floor(Math.random() * N) + 1;
            if (!Lst.includes(Random)) {
                Lst.push(Random);
            }
            Lst.sort((a, b) => a - b);
        }
        for(let i = 0; i<6; i++) {
        Sdiv1.innerHTML += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s(${Lst[i]}).webp" alt=""></div>`;
        }
    }
    
    // Second sponsors section : All sponsors
    if (window.location.pathname.endsWith('home.html')) {
        let Sdiv2 = document.getElementById('s2');
        for (i = 0; i < N; i++) {
            Sdiv2.innerHTML += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s(${i+1}).webp" alt=""></div>`;
        }
    }
});

function OpenDocs(doc) {
    console.log(doc)
}