const mailList = [];
const committeeList = [];
const attribList = [];

document.addEventListener('DOMContentLoaded', function() {
    let N = 6; // Number of sponsors
    // First sponsors section : Randomly selected
    let Sdiv1 = document.getElementById('s1');
    let Lst = [1,2,3,4,5,6];
    if (Sdiv1 !== null) {
        // while (Lst.length < 6){
        //     let Random = Math.floor(Math.random() * N) + 1;
        //     if (!Lst.includes(Random)) {
        //         Lst.push(Random);
        //     }
        //     Lst.sort((a, b) => a - b);
        // }
        for(let i = 0; i<6; i++) { 
          Sdiv1.innerHTML += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s(${Lst[i]}).webp" alt=""></div>`;
        }
    }
    
    // Second sponsors section : All sponsors   Only in home.html
    if (window.location.pathname.endsWith('home.html')) {
        let Sdiv2 = document.getElementById('s2');
        for (i = 0; i < N; i++) {
            Sdiv2.innerHTML += `<div class="col-sm-4 col-lg-2 sponsors-element"><img src="../img/sponsors/s(${i+1}).webp" alt=""></div>`;
        }
    }

    // Fetching infos from attrib and put them in the 3 lists   Only in account.html
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

function openDocs(doc) {
  window.open(doc);
}
function error(message) {
  alert(message)
}

// When activated by a button, shows the infos of a given email (if found in the datas)
function showDelegateAttribution() {
  const mailbox = document.getElementById('signin-mail');
  const mail = mailbox.value
  const attrib = document.getElementById('attrib');
  const index = mailList.indexOf(mail);
  if (mailList.includes(mail)) {
    attrib.innerHTML = `Attribution : ${attribList[index]} (${committeeList[index]})`
    mailbox.style.border = 'solid 1px #00c400ff'
  }
  else{
    attrib.innerHTML = 'Attribution not settled / Attibution non faite'
    mailbox.style.border = 'solid 1px #ff0000ff'
  }
}