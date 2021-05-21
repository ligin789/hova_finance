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
    $(".token-round").animate({left: '50%'},2000);
  });
  $(".tokenmics-card").mouseleave(function(){
    $(".token-round").animate({left: "-20%"},1500);
  });
});


$(window).resize(function() {
  // This will execute whenever the window is resized
  let width=$(window).width(); // New height
  if(width<=1121)
  {
    $('#tokenmics-card').addClass('col-12').removeClass('col-7');
  }
  else
  {
    $('#tokenmics-card').removeClass('col-7').addClass('col-12');
  }
});
