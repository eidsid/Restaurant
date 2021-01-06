$(function() {
    // nav-bar and scroll links
    $('.nav-bar ul li a').on('click', function(e) {
        if ($(this).attr("class") === "store" || $(this).attr("class") === "home") {} else {
            e.preventDefault();
            $('.nav-bar').toggle(50);
            $('html,body').animate({
                scrollTop: $('#' + $(this).data('scroll')).offset().top
            }, 1000);
        }
    });
    //go to top
    $('.top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // event toggle-button
    $('.toggle-button').on('click', function() {
            $('.nav-bar').toggle(1000);
        })
        //scrollOut
    ScrollOut({
        targets: `.plate,#menus h1,#aboutus p,
        #aboutus img,#gallery .left
        ,#gallery .left .text,#gallery .right
        ,#contact  .content  ,#contact .map`
    })



    //about images
    images = ["../assts/images/about/1.jpg", "../assts/images/about/2.jpg", "../assts/images/about/3.jpg"]
    let aboutimgs = $('#aboutus img');
    aboutimgs.attr("src", images[0]);
    let num = 0;
    aboutimgs.click(() => {
        if (num == 2) {
            num = 0;
        } else { num += 1; }
        console.log(num);
        aboutimgs.attr("src", images[num]);
    })
})