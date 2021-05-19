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