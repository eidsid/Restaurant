// EVENT change store langue when click
$(".language-product").on("click", () => {
    let language = local_storage.get_lange();
    if (!language) {
        local_storage.set_lange("AR");
        window.location.reload();
    } else {
        local_storage.remove();
        window.location.reload();
    }
});

function card(name, info, price, url, id) {
    const content = `
    <div class="card">
        <img src="${url}" alt="" />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            $<span class="price">${price}</span>
            <p class="more_info">${info} </p>
            <button class="btn btn-primary" id=" ${id}">add to cart</button>
        </div>
    </div>
`;
    let div = document.createElement("div");
    let clas = ["col-lg-4", "col-md-6", "col-sm-6", "col-xs-6", "col-xxs-auto"];
    clas.forEach((classs) => {
        div.classList.add(classs);
    });
    let cards = document.querySelector(".store-content .main .cards");
    div.innerHTML = content;
    if (cards) {
        cards.append(div);
    }
}

function trans_store(language) {
    if (language) {
        arb_products.forEach((product) => {
            card(product.name, product.info, product.price, product.url, product.id);
        });
    } else {
        english_products.forEach((product) => {
            card(product.name, product.info, product.price, product.url, product.id);
        });
    }
}

// set lange in start
const language = local_storage.get_lange();
const langUI = $(".language");
if (language) {
    arbic_lang.transAll();
    trans_store(language);
    $(".language-product").text("EN");
    $(".card .card-body .btn").text("اضف الي السلة");
} else {
    trans_store("");
}

class Broduct {
    name;
    price;
    count;
    id;
    imgurl;
    constructor(name, price, count, id, imgurl) {
        this.name = name;
        this.price = price * 1;
        this.count = count;
        this.id = id * 1;
        this.imgurl = imgurl;
    }
}
// button  stat shange
function purchased() {
    let ids = local_storage.get_id();
    let btns = document.querySelectorAll(".card .btn");
    btns.forEach((btn) => {
        ids.forEach((id) => {
            if (id === Number(btn.id)) {
                if (language) {
                    btn.innerHTML = "تم شرائة";
                } else {
                    btn.innerHTML = "purchased";
                }
                btn.style.backgroundColor = "green";
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", purchased());
// buy event
$(".card .btn").on("click", (e) => {
    let prod_id = $(e.target).attr("id");
    let imgurl = e.target.parentElement.previousElementSibling.getAttribute(
        "src"
    );
    let name =
        e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent;
    let price =
        e.target.previousElementSibling.previousElementSibling.textContent;
    let product = new Broduct(name, price, 1, prod_id, imgurl);
    // add items
    let ids = local_storage.get_id();
    let element_is_exist = false;
    ids.forEach((id) => {
        if (id === Number(prod_id)) {
            element_is_exist = true;
        }
    });
    if (element_is_exist) {
        window.open("./cart.html");
    } else {
        if (language) {
            $(e.target).text("تم شرائة");
        } else {
            $(e.target).text("purchased");
        }
        $(e.target).css("backgroundColor", "green");
        local_storage.additem(product);
    }
});