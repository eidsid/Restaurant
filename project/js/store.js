function card(name, info, price, url) {
    const content = `
    <div class="card">
        <div class="card-img">
            <img src="${url}" alt="" />
        </div>
        <div class="card-body">
            <h5 class="card-title">
                ${name}
                <span>${price}</span>
            </h5>
            <p class="more_info">${info}</p>
                    <button class="btn btn-primary">add to cart</button>
        </div>
    </div>
`;
    let div = document.createElement('div');
    let clas = ['col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-6', 'col-xxs-auto'];
    clas.forEach(classs => {
        div.classList.add(classs);
    })
    let cards = document.querySelector('.cards');
    div.innerHTML = content;
    cards.append(div);

}


let products = [{
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/1.jpg"
    },

    {
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/3.jpg"
    },
    {
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/4.jpg"
    },
    {
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/5.jpg"
    },
    {
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/6.jpg"
    },
    {
        name: "got meet",
        info: "frinsh got meet",
        price: 12,
        url: "../assts/images/dashes/7.jpg"
    },

];

products.forEach(product => {
    card(product.name, product.info, product.price, product.url);
})