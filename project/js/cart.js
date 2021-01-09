let cart_items = document.querySelector('.cart .cart_container .shopping_card .items');

function createItem(allprice, name, count, id, imgurl) {

    const contentcard = `
<ul class="item" id="${id}"}>
  <li><img class="rounded-circle" src="${imgurl}" alt=""/></li>
  <li>
    <h5>${name}</h5>
  </li>
  <li class="count"><i class="fa fa-arrow-down down"></i>
    <input class="item-count" type="text" value="${count}"/><i class="fa fa-arrow-up up"></i>
  </li>
  <li>
    <p class="price">$ ${allprice}</p>
  </li>
  <li><i class="fa fa-close delete"></i></li>
</ul>`;
    let div = document.createElement('div');
    div.innerHTML = contentcard;
    if (cart_items) {
        cart_items.append(div);
    }

}
let items = local_storage.getitems();
items.forEach(item => {
createItem(item.allprice, item.name, item.count,
    item.id, item.imgurl);
console.log(item.allprice, item.name, item.count,
    item.id, item.imgurl);
});

});