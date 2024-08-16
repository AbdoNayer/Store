// Window Load screen

$(window).on("load", function () {
  // Loading Page
  $(".spinner")
    .delay(500)
    .fadeOut(400, function () {
      document.documentElement.style.setProperty(
        "--backRightIn",
        "translateX(100%)"
      );
      document.documentElement.style.setProperty(
        "--backLefttIn",
        "translateX(-100%)"
      );
      $(".loader").fadeOut(300);
    });
  $("body").css("overflow-y", "auto");

  // $(".sliderHome img, .main-body-slider").height($(document).height());

  // Animation Page
  AOS.init();
});

$(document).ready(function () {
  // Scroll Fix Header
  $(window).scroll(function () {
    if ($(window).width() > 767) {
    }
    if ($(this).scrollTop() > 30) {
      $("header").addClass("!bg-white !shadow-md");
      $("header ul li a").addClass("!text-black");
      $(".click-nav .handle").addClass("!bg-black");
    } else {
      $("header").removeClass("!bg-white !shadow-md");
      $("header ul li a").removeClass("!text-black");
      $(".click-nav .handle").removeClass("!bg-black");
    }
  });

  // Click Add class Link
  $(document).on("click", "header ul li", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Click Scroll Up Page
  $(document).on("click", ".fix-up", function () {
    $(window).scrollTop(0);
  });

  // Show More List
  $(document).on("click", ".show-more-list", function () {
    $(".list-services").toggleClass("!h-auto");
    if ($(this).text() === "مشاهدة المزيد") {
      $(this).text("مشاهدة الآقل");
    } else {
      $(this).text("مشاهدة المزيد");
    }
  });

  // Scroll For Section
  $(document).on(
    "click",
    "header ul li a, .list-footer ul li a, .info-tab a",
    function (e) {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).data("value")).offset().top - 70,
        },
        50
      );
      e.preventDefault();
      if ($(window).width() < 990) {
        $(".handle").toggleClass("closed");
        $(".list-head").toggleClass("back");
        $(".overlay").toggleClass("translate-x-[-100%]");
      }
    }
  );

  // Click Open Nav Mobile
  $(document).on("click", ".click-nav", function () {
    $(".handle").toggleClass("closed");
    $(".list-head").toggleClass("back");
    $(".overlay").toggleClass("translate-x-[-100%]");
    $("body").toggleClass("overflow-hidden");
  });

  const isRtl = $("html").attr("dir") === "rtl";

  // Slider Home
  $(".sliderHome").owlCarousel({
    loop: true,
    margin: 1000,
    center: true,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: true,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Slider Classification
  $(".sliderClassification").owlCarousel({
    rtl: isRtl,
    loop: false,
    margin: 10,
    center: false,
    autoplay: false,
    pagination: false,
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      900: {
        items: 5,
      },
      1000: {
        items: 12,
      },
    },
  });

  // Slider Products
  $(".sliderProducts").owlCarousel({
    rtl: isRtl,
    loop: false,
    margin: 0,
    center: false,
    autoplay: false,
    pagination: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Slider Groups
  $(".sliderGroups").owlCarousel({
    rtl: isRtl,
    loop: false,
    margin: 0,
    center: false,
    autoplay: false,
    pagination: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // Slider Customized
  $(".sliderCustomized").owlCarousel({
    rtl: isRtl,
    loop: false,
    margin: 0,
    center: false,
    autoplay: false,
    pagination: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Slider Customized
  $(".sliderCustomer").owlCarousel({
    rtl: isRtl,
    loop: false,
    margin: 20,
    center: false,
    autoplay: false,
    pagination: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});
