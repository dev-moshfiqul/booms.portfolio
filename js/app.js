/* Template Name: Natio - Bootstrap 5 Personal Landing Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Version: 1.0.0
   Website: https://zoyothemes.com
   Created: March 2024
   File Description: Main Css file of the template
*/

// window.addEventListener('load',   fn , false )

//Menu
function windowScroll() {
   const navbar = document.getElementById("navbar");
   if (
     document.body.scrollTop >= 50 ||
     document.documentElement.scrollTop >= 50
   ) {
     navbar.classList.add("nav-sticky");
   } else {
     navbar.classList.remove("nav-sticky");
   }
}
window.addEventListener("scroll", (ev) => {
   ev.preventDefault();
   windowScroll();
});

// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
  // Active classes
  // navClass: 'active', // applied to the nav list item
  // contentClass: 'active', // applied to the content
  offset: 80
});

// Type JS
var type_list = document.querySelector('#typed_list');

if (type_list) {
  var aboutsocial = new Typed('#typed', {
    stringsElement: '#typed_list',
    typeSpeed: 170,
    backSpeed: 30,
    cursorChar: '|',
    loop: true
  });
};


// Testimonial Slider
var testimonialSlider = document.querySelector('.testimonials');

// Check 
if (testimonialSlider) {
  // Initialize slider settings
  var testimonialSliderInint = {
    loop: false,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 60,
      },
    },
  };

  // Initialize the slider
  var testimonialSliderInstance = new Swiper(".testimonials", testimonialSliderInint);
}

// Back To Top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}