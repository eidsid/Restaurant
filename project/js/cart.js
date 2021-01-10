 let cart_items = document.querySelector(
     ".cart .cart_container .shopping_card .items");


 class cartUI {

     static cart_model(price, name, count, id, imgurl) {

         const contentcard = `
<ul class="item" id="${id}"}>
  <li><img class="rounded-circle" src="${imgurl}" alt=""/></li>
  <li>
    <h5>${name}</h5>
  </li>
  <li class="count">
    <input class="item-count" type="number" min="0" value="${count}" id="count"/>
  </li>
  <li>
    <p class="price">$ ${price}</p>
  </li>
  <li><i class="fa fa-close delete" id="delete"></i></li>
</ul>`;
         let card_container = document.createElement("div");
         card_container.innerHTML = contentcard;
         if (cart_items) {
             cart_items.append(card_container);
         }
     }

     static creatUI() {
         let items = local_storage.getitems();

         items.forEach((item) => {
             cartUI.cart_model(item.price, item.name, item.count, item.id, item.imgurl);
         });
     }
     static getallprice() {
         let items = local_storage.getitems();
         let total = 0;
         items.forEach(item => {
             total += item.count * item.price;
         })
         $('.allcust').text("$" + total)
     }
     static onstart() {
         cartUI.creatUI();
         cartUI.getallprice();
     }


 }
 // creat ui in start
 document.addEventListener("DOMContentLoaded", cartUI.onstart());
 // add event on cart
 let selectitems = document.querySelectorAll(".cart .cart_container .shopping_card .items .item");
 selectitems.forEach(item => {
 item.addEventListener('click', (e) => {

     let id = Number(e.target.parentElement.parentElement.id);
     if (e.target.id === "delete") {
         e.target.parentElement.parentElement.remove();
         local_storage.removeitem(id);
         cartUI.getallprice();
     }
     if (e.target.id === "count") {
         let value = Number(e.target.value);
         local_storage.edititem(id, value);
         cartUI.getallprice();

     }

 })
 })













 });