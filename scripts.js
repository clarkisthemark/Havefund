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
    var menus = document.querySelectorAll('.menu');
    var button = document.getElementById('collapseButton');
    var isCollapsed = true; // Flag to track menu state

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500 && !isCollapsed) {
            for (var i = 0; i < menus.length; i++) {
                menus[i].style.display = 'block';
            }
        } else {
            for (var i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none';
            }
        }
    });

    function toggleMenus() {
        isCollapsed = !isCollapsed; // Toggle menu state
        for (var i = 0; i < menus.length; i++) {
            menus[i].style.display = isCollapsed ? 'none' : 'block';
        }
    }

    button.addEventListener('click', function() {
        toggleMenus();
    });

    document.addEventListener('click', function(event) {
        var isClickInsideMenu = false;
        for (var i = 0; i < menus.length; i++) {
            if (menus[i].contains(event.target)) {
                isClickInsideMenu = true;
                break;
            }
        }
        if (!isClickInsideMenu && event.target !== button) {
            isCollapsed = true;
            for (var i = 0; i < menus.length; i++) {
                menus[i].style.display = 'none';
            }
        }
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




