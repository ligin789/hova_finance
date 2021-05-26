AOS.init({
  duration: 1600,
})


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


//change nav according to scroll
// Cache selectors
var lastId,
 topMenu = $("#navbarText"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });



// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
