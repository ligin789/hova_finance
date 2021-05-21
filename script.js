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
$(document).ready(function() {
  $(".tokenmics-card").mouseenter(function(){
    $(".token-round").animate({left: '500px'},1500);
  });
  $(".tokenmics-card").mouseleave(function(){
    $(".token-round").animate({left: "-300px"},1500);
  });
});
