const storege = JSON.parse(localStorage.getItem('card')) || [];
const cart = document.querySelector('.cart');
const totalprice = document.querySelector('.totalprice');
const counts = document.querySelector('.counts');
counts.textContent = storege.length;

if(storege.length > 0) {
    document.querySelector('.pCart').textContent = `Your cart`;
}

function quantityPrice() {
    let total = storege.reduce((pre, item) => {
        return pre + item.numberprice * item.quantity;
    },0)
    
    totalprice.textContent = `${total}$`;
};

function renderCart() {
    cart.innerHTML = ``;
    if(storege) {
        storege.forEach((el, index) => {
            let {idcart, imgs, title, numberprice, opis, quantity = 1, btadd} = el;
            let newcart = document.createElement('div');
            newcart.setAttribute('class', 'newcart');
            newcart.innerHTML = `
             <div id="${idcart}" class="newcart"> 
             <img class="imgcart" src="${imgs}" alt="">
             <p class="titlecart">${title}</p>
             <p class="opiscart">${opis}</p>
             <div class="quantity">
             <span class="spanMinus" data-index="${index}">-</span>
             <span class="spanValue">${quantity}</span>
             <span class="spanPlus" data-index="${index}">+</span>
             </div>
             <p class="pricecart">${numberprice * quantity}$</p>
             <button data-index="${index}" class="btclosed">X</button>
            </div>
            `
            cart.appendChild(newcart);
        })
    }
    quantityPrice();
}

cart.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if(e.target.classList.contains('spanPlus')) {
        storege[index].quantity++;
    }
    else if(e.target.classList.contains('spanMinus')) {
        storege[index].quantity--;
        if(storege[index].quantity < 1) {
            storege.splice(index, 1);
            location.reload();
        }
    }
    localStorage.setItem('card', JSON.stringify(storege));
    renderCart();
});

renderCart();

                        //  Удаление с корзины
                                
document.onclick = (e) => {
    const cartPosition = e.target.getAttribute('data-index');
    if(e.target.classList.contains('btclosed') && cartPosition !== null) {
        storege.splice(cartPosition, 1);
        localStorage.setItem('card', JSON.stringify(storege));
        renderCart();
        location.reload();
    }
};


