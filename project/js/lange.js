class arbic_lang {
    static nav_bar() {
        const navitem = document.querySelectorAll(".nav-bar ul li a");
        const order = $(".nav-bar .order h4 a");
        const home = $(".nav-bar h4 a");
        const adress = $(".nav-bar .adress");
        const navbar_arbic = [
            "مطعم",
            "قائمة الطعام",
            "معلومات عنا",
            " صالة العرض",
            "اطلب عبر الانترنت",
            "اتصل بنا",
        ];

        navitem.forEach((element, i) => {
            element.text = navbar_arbic[i];
        });
        home.text("الصفحه الرئيسيه ");
        adress.text("القاهرة,  23 شارع محمد علي");
        order.text("محفظه");
        langUI.text("EN");
    }
    static carousel() {
        const carousel_item_h5 = document.querySelectorAll(".info .content h5");
        const carousel_item_hA = ["متوفر الان", "تتبعنا", "اكتشف"];
        const carousel_item_p = document.querySelectorAll(".info .content p");
        const carousel_item_pA = [
            " نحن متوفر من الثلاثاء إلى السبت من الساعة 11:30 صباحًا إلى 9 مساءً",
            "تابعونا على الشبكات الاجتماعية",
            "تعال واكتشف عروضنا الجديدة",
        ];

        carousel_item_h5.forEach((item, i) => {
            item.textContent = carousel_item_hA[i];
        });
        carousel_item_p.forEach((item, i) => {
            item.textContent = carousel_item_pA[i];
        });
    }
    static menus() {
        $("#menus").css({ "text-align": " right", "padding-right": "5%" });

        $("#menus h1").text("قائمة الطلبات الخارجية");
        $("#menus h4").text("المقبلات");
        $("#menus h3").text("الخطوط الرئيسية");
        const appertizerh = document.querySelectorAll(".appertizers .plate h6");
        const appertizerhtext = [
            "  سلطة الماعز  160جنيه",
            "قطع الدجاج المقلية 180 جنيه",
            "بطاطا دجاج نصف زجاج 180 جنيه",
        ];
        const appertizerp = document.querySelectorAll(".appertizers .plate p");
        const appertizerptext = [
            "جرجير وسلطة جرجير وملفوف أحمر مخلل وجبن بارميزان وجوز وجبن ماعز طازج",
            "مايونيز حار مع صلصة العسل بالزعتر",
            "بطاطا مقلية ، جبنة كورد ، دجاج مفروم ، دجاج ديمي جلاس في نبيذ أبيض",
        ];
        appertizerh.forEach((title, i) => {
            title.textContent = appertizerhtext[i];
        });

        appertizerp.forEach((disc, i) => {
            disc.textContent = appertizerptext[i];
        });
        //main plate

        const main_menus_htext = [
            "  سلطة الماعز  160جنيه",
            "قطع الدجاج المقلية 180 جنيه",
            "بطاطا دجاج نصف زجاج 180 جنيه",
            "بطاطس مقلية نصف كوب 180 جنية",
            'جبن ماك "ن" 450 جنيه',
            "برجر بقري 300 جنيه",
            "لحم و بطاطا 300 جنيه",
        ];
        const main_menus_h = document.querySelectorAll(
            "#menus .main-menus .plate h6"
        );
        const main_menus_ptext = [
            "جرجير وسلطة جرجير وملفوف أحمر مخلل وجبن بارميزان وجوز وجبن ماعز طازج",
            "مايونيز حار مع صلصة العسل بالزعتر",
            "بطاطا مقلية ، جبنة كورد ، دجاج مفروم ، دجاج ديمي جلاس في نبيذ أبيض",
            "جرجير وسلطة جرجير وملفوف أحمر مخلل وجبن بارميزان وجوز وجبن ماعز طازج",
            "طماطم سان مارزانو ، بافلو موتزاريلا ، ريحان ، ثوم وزيت زيتون",
            "جرجير وسلطة جرجير وملفوف أحمر مخلل وجبن بارميزان وجوز وجبن ماعز طازج",
            "مارينيير: بصل ، نبيذ ، بقدونس | الجبن الأزرق: البصل والنبيذ والبقدونس والقشدة والجبن الأزرق | البوليت: البصل والنبيذ والبقدونس والقشدة والفطر وصفار البيض | المارينارا: البصل والنبيذ والبقدونس وطماطم سان مارزانو والريحان",
        ];
        const main_menus_p = document.querySelectorAll(
            "#menus .main-menus .plate p"
        );

        main_menus_h.forEach((title, i) => {
            title.textContent = main_menus_htext[i];
        });

        main_menus_p.forEach((disc, i) => {
            disc.textContent = main_menus_ptext[i];
        });
    }
    static aboutus() {
        $("#aboutus p").text(
            ' سواء كنت في حالة مزاجية لتناول بوتين "صغير" أو سلطة "كبيرة" أو بيرة "واحدة فقط" أو شوت إسبريسو ، عندما ترضي ذوقك ، كل شيء جيد مستوحى من النكهات المحلية والأطباق المفضلة لسكان مونتريال ، يقدم طهاة المطعم الأطباق الموسمية والمريحة التي تستحضر وتخلق أفضل الذكريات '
        );
    }
    static gallery() {
        const texth = "انظر إلى معرضنا يبدو جيدًا ،",
            textp = `تمامًا مثل محيطه ، يتمتع بروح فرنسية ، ولكن أيضًا دفء حانة بريطانية وبروكلين. حقًا جزء فريد من مونتريال. مساحة ترحيبية يشعر فيها الجميع وكأنهم في المنزل.`;
        $(".img_container h5").text(texth);
        $(".img_container p").text(textp);
    }
    static contact() {
        const headerstext = ["ابحث عنا", "ساعات العمل", "التحفظات"];
        const h6text = "كورنيش النيل، قسم بني سويف، بنى سويف، محافظة بني سويف";
        const paratext = [
            "من الإثنين إلى الجمعة",
            "من 11:30 صباحًا إلى 3:00 مساءً",
            "لمزيد من المعلومات info@resturant.com",
        ];
        const copytext = "حقوق النشر ونسخ © 2021 جميع الحقوق محفوظة للمطعم";
        const headers = document.querySelectorAll("#contact h4");
        const h6 = $("#contact h6");
        const para = document.querySelectorAll("#contact p");
        const copy = $(".copy");
        const btn = $("#contact .btn a");
        btn.text("فتح في خريطة جوجل");
        h6.text(h6text);
        copy.text(copytext);
        headers.forEach((header, i) => {
            header.textContent = headerstext[i];
        });
        para.forEach((p, i) => {
            p.textContent = paratext[i];
        });
    }
    static cart() {
        $(".shopping_card h3.title").text("عربة التسوق");
        $(".all_coust h5").text("التكلفه الكليه");
        $(".card_details h3.title").text("معلومات الفيزا كارت").css({
            "text-shadow": "none",
            "font-weight": "bold",
        });
        $(".user_card h3").text("ادخل بيانات الكارت");
        $(".card_details .user_card button")
            .text("الدفع")
            .css("font-weight", "bold");
    }
    static transAll() {
        arbic_lang.nav_bar();
        arbic_lang.carousel();
        arbic_lang.menus();
        arbic_lang.aboutus();
        arbic_lang.gallery();
        arbic_lang.contact();
        arbic_lang.cart();
    }
}
// EVENT change langue when click
$(".language").on("click", () => {
    let language = local_storage.get_lange();
    if (!language) {
        local_storage.set_lange("AR");
        arbic_lang.transAll();
    } else {
        local_storage.remove();
        window.location.reload();
    }
});
//stor transalte
//cart element

let english_products = [{
        name: "Goat meat",
        info: "fransh Goat meat",
        price: 30,
        url: "../assts/images/dashes/1.jpg",
        id: 1,
    },

    {
        name: "Goat  salad",
        info: "fransh Goat  salad",
        price: 12,
        url: "../assts/images/dashes/3.jpg",
        id: 2,
    },
    {
        name: "Goat cheese",
        info: "fransh Goat cheese",
        price: 12,
        url: "../assts/images/dashes/4.jpg",
        id: 3,
    },

    {
        name: "sweet plate",
        info: "fransh sweet plate",
        price: 7,
        url: "../assts/images/dashes/5.jpg",
        id: 4,
    },
    {
        name: "sweet plate",
        info: "fransh sweet plate",
        price: 10,
        url: "../assts/images/dashes/6.jpg",
        id: 5,
    },
    {
        name: "sweet plate",
        info: "fransh sweet plate",
        price: 15,
        url: "../assts/images/dashes/7.jpg",
        id: 6,
    },
];
let arb_products = [{
        name: "لحم الماعز",
        info: "لحم الماعز الفرنسي",
        price: 30,
        url: "../assts/images/dashes/1.jpg",
        id: 1,
    },

    {
        name: "سلطة الماعز",
        info: "سلطة الماعز الفرنسية",
        price: 12,
        url: "../assts/images/dashes/3.jpg",
        id: 2,
    },
    {
        name: " جبن الماعز",
        info: "جبن الماعز الفرنسي",
        price: 12,
        url: "../assts/images/dashes/4.jpg",
        id: 3,
    },
    {
        name: " طبق حلو",
        info: "طبق حلو فرنسي",
        price: 7,
        url: "../assts/images/dashes/5.jpg",
        id: 4,
    },
    {
        name: " طبق حلو",
        info: "طبق حلو فرنسي",
        price: 10,
        url: "../assts/images/dashes/6.jpg",
        id: 5,
    },
    {
        name: " طبق حلو",
        info: "طبق حلو فرنسي",
        price: 15,
        url: "../assts/images/dashes/7.jpg",
        id: 6,
    },
];