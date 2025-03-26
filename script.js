const cardset = document.querySelectorAll(`.cards`);
const btopen = document.querySelector(`.btopen`);
const cardStorege = JSON.parse(localStorage.getItem(`card`)) || [];
const counts = document.querySelector('.counts');
counts.textContent = cardStorege.length;

cardset.forEach(el => {
    // console.dir(el)
    let idcart = el.id
    let imgs = el.childNodes[3].attributes.src.textContent;
    let title = el.childNodes[5].innerHTML;
    let price = el.childNodes[7].innerHTML;
    let opis = el.childNodes[9].innerHTML;
    let btadd = el.childNodes[13];
    //  console.log(idcart);
    let numberprice = parseInt(price.replace(/\s/g, ""), 10);

btadd.addEventListener(`click`, () => {
    const cart = {idcart, imgs, title, numberprice, opis, quantity: 1, btadd};
    const cardStorege = localStorage.getItem(`card`) || "[]";
  const card = JSON.parse(cardStorege);
  const idExist = card.findIndex(item => item.idcart === idcart);
  if(idExist != -1) {
     alert(`This item has already been added to cart!`)
  }
  else {
     card.push(cart);
  }
   location.reload();
localStorage.setItem(`card`, JSON.stringify(card));
})
});


                 // Carusel


const carusel = document.querySelector(`.carusel`);                 
let offset = 0;


document.querySelector(`.btleft`).addEventListener(`click`, function() {
  offset = offset - 330;
 if(offset < 0) {
    offset = 1340
 }
  carusel.style.left = -offset + `px`;    
});

document.querySelector(`.btright`).addEventListener(`click`, function() {
   offset = offset + 335;
  if(offset > 1380) {
     offset = 0
  }
   carusel.style.left = -offset + `px`;    
 });
 

