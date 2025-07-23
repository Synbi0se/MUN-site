const mailList = [];
const committeeList = [];
const attribList = [];

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

    if(window.location.pathname.endsWith('account.html')){
      fetch('../rcs/attrib.csv')
      .then(response => response.text())
      .then(text => {
        const rows = text.trim().split('\n');
        const dataRows = rows.slice(1);
        dataRows.forEach(row => {
          const [mail, committee, attrib] = row.split(';');
          if (mail) {
            mailList.push(mail);
          }
          if (committee) {
            committeeList.push(committee);
          }
          if (attrib) {
            attribList.push(attrib);
          }
        });
      });
    }
});

function OpenDocs(doc) {
    console.log(doc)
}

function showDelegateAttribution() {
  var mail = document.getElementById('signin-mail').value;
  if(mailList.includes(mail)) {
    const committee = document.getElementById('committee');
    const attrib = document.getElementById('attrib');
    const index = mailList.indexOf(mail);
    committee.append("Comité : " + committeeList[index])
    attrib.append("Attribution : " + attrib[index])
  }
}