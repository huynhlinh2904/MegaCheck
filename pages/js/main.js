(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(document).ready(function () {
        function isMobile() {
            return window.innerWidth <= 768; // Nếu màn hình nhỏ hơn hoặc bằng 768px
        }
    
        function updateLogo() {
            if (isMobile()) {
                $("#header-logo").attr("src", "./img/logo/logo_mau.png");
                $("#header-logo2").attr("src", "../../img/logo/logo_mau.png");
                $("#header-logo3").attr("src", "../img/logo/logo_mau.png");
            } else {
                $("#header-logo").attr("src", "./img/logo/logo_trang.png");
                $("#header-logo2").attr("src", "../../img/logo/logo_trang.png");
                $("#header-logo3").attr("src", "../img/logo/logo_trang.png");
            }
        }
    
        updateLogo();
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 45) {
                $('.navbar').addClass('sticky-top shadow-sm');
                $("#header-logo").attr("src", "./img/logo/logo_mau.png");
                $("#header-logo2").attr("src", "../../img/logo/logo_mau.png");
                $("#header-logo3").attr("src", "../img/logo/logo_mau.png");
            } else {
                if (!isMobile()) {
                    $("#header-logo").attr("src", "./img/logo/logo_trang.png");
                    $("#header-logo2").attr("src", "../../img/logo/logo_trang.png");
                    $("#header-logo3").attr("src", "../img/logo/logo_trang.png");
                }
                $('.navbar').removeClass('sticky-top shadow-sm');
            }
        });
    
        $(window).resize(updateLogo); // Cập nhật khi thay đổi kích thước màn hình
    });
    
    
    
    


    // Smooth scrolling on the navbar links
    $(document).ready(function () {
       

       

        // Kiểm tra hash trên URL
        var currentHash = window.location.hash;
    
        if (currentHash) {
            // Loại bỏ class 'active' hiện tại
            $('.navbar-nav .active').removeClass('active');
    
            // Thêm class 'active' vào liên kết tương ứng
            $('.navbar-nav a[href="' + currentHash + '"]').addClass('active');
            
            // Cuộn đến phần tử tương ứng
            $('html, body').animate({
                scrollTop: $(currentHash).offset().top - 45
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

$(document).ready(function(){
    $('.floatingButton').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).children('.fa').toggleClass('fa-plus fa-close');
        $('.floatingMenu').stop().slideToggle();
    });

    $(document).on('click', function(e) {
        var container = $(".floatingButtonWrap");

        // Kiểm tra nếu click ngoài menu thì đóng lại
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.floatingButton').removeClass('open');
            $('.floatingButton .fa').removeClass('fa-close').addClass('fa-plus');
            $('.floatingMenu').stop().slideUp();
        }
    });
    
});

