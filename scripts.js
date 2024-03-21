/* Scroll paragraph appear */

$(window).scroll(function() {
  $("p").each(function() {
      var top_of_element = $(this).offset().top;
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
          $(this).addClass('is-visible');
      }
  });
});

/* Scroll percentage */

  window.onscroll = function() {myScroll()};

function myScroll() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}


/* Scroll list appear */

/*
$(window).scroll(function(){
if($(window).scrollTop() > 500){
    $("#pagemenu").fadeIn("fast");
}
});
$(window).scroll(function(){
if($(window).scrollTop() < 500){
    $("#pagemenu").fadeOut("fast");
    $("#myBar").fadeOut("fast");
     $(".header").fadeOut("fast");
}
});
          $(window).scroll(function(){
if($(window).scrollTop() > 500){
    $(".toolsused").fadeIn("fast");
      $("#myBar").fadeIn("fast");
    $(".header").fadeIn("fast");
}
});
$(window).scroll(function(){
if($(window).scrollTop() < 500){
    $(".toolsused").fadeOut("fast");
}
}); 

*/


/* Responsive mobile Navbar */

 function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
          x.className += " responsive";
          } else {
              x.className = "topnav";
              }
              }



document.addEventListener('DOMContentLoaded', function() {
  var menuCollapsed = true; // Flag to track menu state

  window.addEventListener('scroll', function() {
      var pagemenu = document.getElementById('pagemenu');
      if (window.scrollY > 300 && menuCollapsed) {
          pagemenu.style.display = 'block';
      } else {
          pagemenu.style.display = 'none';
      }
  });

  document.getElementById('collapseButton').addEventListener('click', function() {
      var pagemenu = document.getElementById('pagemenu');
 
      if (menuCollapsed) {
          pagemenu.style.display = 'none';
      } else {
          pagemenu.style.display = 'block';
      }
      menuCollapsed = !menuCollapsed; // Toggle menu state
  });
  
  

});


document.addEventListener('DOMContentLoaded', function() {
  var menusCollapsed = true; // Flag to track menus state

  window.addEventListener('scroll', function() {
      var menus = document.querySelectorAll('.menu');
      if (window.scrollY > 500 && menusCollapsed) {
          menus.forEach(function(menu) {
              menu.style.display = 'block';
          });
      } else {
          menus.forEach(function(menu) {
              menu.style.display = 'none';
          });
      }
  });

  document.getElementById('collapseButton').addEventListener('click', function() {
      var menus = document.querySelectorAll('.menu');
      menus.forEach(function(menu) {
          if (menusCollapsed) {
              menu.style.display = 'none';
          } else {
              menu.style.display = 'block';
          }
      });
      menusCollapsed = !menusCollapsed; // Toggle menus state
  });
});



window.addEventListener('scroll', function() {
      var collapseButton = document.getElementById('collapseButton');
      if (window.scrollY > 300) {
          collapseButton.style.display = 'block';
      } else {
          collapseButton.style.display = 'none';
      }
  });




