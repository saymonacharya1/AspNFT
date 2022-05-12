$(document).ready(function(){
  $("a").on('click', function(event) {
 if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});


const wrapperMenu = document.querySelector('.wrapperMenu');
const menuItems = document.querySelector('.menu_items');

wrapperMenu.addEventListener("click", () => {
    wrapperMenu.classList.toggle('active');
    menuItems.classList.toggle('active');
})

document.querySelectorAll(".item").forEach(n => n. addEventListener("click", () => {
    wrapperMenu.classList.remove("active");
    menuItems.classList.remove("active");
} ))


var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass(".box"); 
    } 
  });
  
});