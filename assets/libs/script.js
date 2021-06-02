AOS.init({
  duration: 1600,
})

//disable select 
document.addEventListener('contextmenu', event => event.preventDefault());

//disable copy paste 
function killCopy(e) {
  return false
}
function reEnable() {
  return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
  document.onmousedown = killCopy
  document.onclick = reEnable
}

// //inspect disable

// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'M'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }


// Navbar link selection
function menuClick(Id) {
  $(".navbar-nav .nav-link").each(function (i, obj) {
    obj.classList.remove("active");
  });
  //  buttonId.classList.add("selected-button");
  $('#' + Id).toggleClass('active');

}

//animation of round token
$(document).ready(function () {
  $(".tokenmics-card").mouseenter(function () {
    $(".token-round").animate({ left: '50%' }, 2000);
  });
  $(".tokenmics-card").mouseleave(function () {
    $(".token-round").animate({ left: "-20%" }, 1500);
  });
});

// Timeline
(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
// Timeline End



let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  stickfunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//scroll nav
var header = document.getElementById("navbar-wrapper");

function stickfunction() {
  if (window.pageYOffset > 10) {
    header.classList.add("header-nav");
  }
  else {
    header.classList.remove("header-nav");
  }
}


/* Code for changing active 
            link on Scrolling */
$(window).scroll(function () {
  var distance = $(window).scrollTop();
  $('.page-section-for-scroll').each(function (i) {

    if ($(this).position().top
      <= distance + 250) {

      $('.navbar-nav a.active')
        .removeClass('active');

      $('.navbar-nav a').eq(i)
        .addClass('active');
    }
  });
}).scroll();

// Legal Notice
$(document).ready(function () {
  // Add down arrow icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".faq-card-head").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
  });

  // Toggle right and down arrow icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".faq-card-head").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".faq-card-head").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
  });
});
// Legal Notice End