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
  
  window.addEventListener('scroll', throttle(myScroll, 80));
  
  // Throttle function
  function throttle(func, limit) {
      let lastFunc;
      let lastRan;
      return function() {
          const context = this;
          const args = arguments;
          if (!lastRan) {
              func.apply(context, args);
              lastRan = Date.now();
          } else {
              clearTimeout(lastFunc);
              lastFunc = setTimeout(function() {
                  if ((Date.now() - lastRan) >= limit) {
                      func.apply(context, args);
                      lastRan = Date.now();
                  }
              }, limit - (Date.now() - lastRan));
          }
      };
  }
  
  function myScroll() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
  }
  
  
  $(window).scroll(function(){
  if($(window).scrollTop() < 300){
      $("#myBar").fadeOut("fast");
       $(".header").fadeOut("fast");
  }
  });
            $(window).scroll(function(){
  if($(window).scrollTop() > 300){
        $("#myBar").fadeIn("fast");
      $(".header").fadeIn("fast");
  }
  });
  
  
  
  /* Scroll list appear */
  
  
  //$(window).scroll(function(){
  //if($(window).scrollTop() > 500){
  //    $("#pagemenu").fadeIn("fast");
  //}
  //});
  //$(window).scroll(function(){
  //if($(window).scrollTop() < 500){
  //    $("#pagemenu").fadeOut("fast");
  //    $("#myBar").fadeOut("fast");
  //     $(".header").fadeOut("fast");
  //}
  //});
  //          $(window).scroll(function(){
  //if($(window).scrollTop() > 500){
  //    $(".toolsused").fadeIn("fast");
  //      $("#myBar").fadeIn("fast");
  //    $(".header").fadeIn("fast");
  //}
  //});
  //$(window).scroll(function(){
  //if($(window).scrollTop() < 500){
  //    $(".toolsused").fadeOut("fast");
  //}
  //}); 
  
  
  
  
  /* Responsive mobile Navbar */
  
   function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
            x.className += " responsive";
            } else {
                x.className = "topnav";
                }
                }
  
  
  
  
  
  
  /*Working Mobile Menu, must click Menu*/
  
  
  //document.addEventListener('DOMContentLoaded', function() {
  //  var menuCollapsed = true; // Flag to track menu state
  //
  //  window.addEventListener('scroll', function() {
  //      var pagemenu = document.getElementById('pagemenu');
  //      if (window.scrollY > 300 && menuCollapsed) {
  //          pagemenu.style.display = 'block';
  //      } else {
  //          pagemenu.style.display = 'none';
  //      }
  //  });
  //
  //  document.getElementById('collapseButton').addEventListener('click', function() {
  //      var pagemenu = document.getElementById('pagemenu');
  // 
  //      if (menuCollapsed) {
  //          pagemenu.style.display = 'none';
  //      } else {
  //          pagemenu.style.display = 'block';
  //      }
  //      menuCollapsed = !menuCollapsed; // Toggle menu state
  //  });
  //  
  //  
  //
  //});
  //
  //
  //document.addEventListener('DOMContentLoaded', function() {
  //  var menusCollapsed = true; // Flag to track menus state
  //
  //  window.addEventListener('scroll', function() {
  //      var menus = document.querySelectorAll('.menu');
  //      if (window.scrollY > 300 && menusCollapsed) {
  //          menus.forEach(function(menu) {
  //              menu.style.display = 'block';
  //          });
  //      } else {
  //          menus.forEach(function(menu) {
  //              menu.style.display = 'none';
  //          });
  //      }
  //  });
  //
  //  document.getElementById('collapseButton').addEventListener('click', function() {
  //      var menus = document.querySelectorAll('.menu');
  //      menus.forEach(function(menu) {
  //          if (menusCollapsed) {
  //              menu.style.display = 'none';
  //          } else {
  //              menu.style.display = 'block';
  //          }
  //      });
  //      menusCollapsed = !menusCollapsed; // Toggle menus state
  //  });
  //});
  
  
  
  
  
  
  
  
  
  
  
  /*Working Mobile menu to click anywhere on screen.   Desktop Pagemenu and toolsused are not appearing*/
  //
  
  //window.addEventListener('scroll', function() {
  //      var collapseButton = document.getElementById('collapseButton');
  //      if (window.scrollY > 300) {
  //          collapseButton.style.display = 'block';
  //      } else {
  //          collapseButton.style.display = 'none';
  //      }
  //  });
  //
  //
  //
  //
  //document.addEventListener('DOMContentLoaded', function() {
  //    var menus = document.querySelectorAll('.menu');
  //    var button = document.getElementById('collapseButton');
  //    var isCollapsed = true; // Flag to track menu state
  //
  //    window.addEventListener('scroll', function() {
  //        if (window.scrollY > 500 && !isCollapsed) {
  //            for (var i = 0; i < menus.length; i++) {
  //                menus[i].style.display = 'block';
  //            }
  //        } else {
  //            for (var i = 0; i < menus.length; i++) {
  //                menus[i].style.display = 'none';
  //            }
  //        }
  //    });
  //
  //    function toggleMenus() {
  //        isCollapsed = !isCollapsed; // Toggle menu state
  //        for (var i = 0; i < menus.length; i++) {
  //            menus[i].style.display = isCollapsed ? 'none' : 'block';
  //        }
  //    }
  //
  //    button.addEventListener('click', function(event) {
  //        toggleMenus();
  //        event.stopPropagation(); // Prevent the click event from propagating further
  //    });
  //
  //    document.addEventListener('click', function(event) {
  //        if (!button.contains(event.target)) { // If the clicked target is not the button
  //            isCollapsed = true; // Collapse the menu
  //            for (var i = 0; i < menus.length; i++) {
  //                menus[i].style.display = 'none';
  //            }
  //        }
  //    });
  //});
  
  
  
  //
  //This is the setup, doesnt allow double clicking on toolsused and pagemenu
  //
  //document.addEventListener('DOMContentLoaded', function() {
  //    var pagemenu = document.querySelector('#pagemenu');
  //    var toolsused = document.querySelector('.toolsused');
  //    var isCollapsed = true; // Flag to track menu state
  //    var collapseButton = document.getElementById('collapseButton');
  //    var menus = document.querySelectorAll('.menu');
  //    var button = document.getElementById('collapseButton');
  //
  //    window.addEventListener('scroll', function() {
  //        if (window.scrollY > 300) {
  //            collapseButton.style.display = 'block';
  //        } else {
  //            collapseButton.style.display = 'none';
  //        }
  //
  //        if (window.innerWidth > 700 && window.scrollY > 300 && isCollapsed) {
  //            pagemenu.style.display = 'block';
  //            toolsused.style.display = 'block';
  //            isCollapsed = false;
  //        } else if (window.innerWidth > 700 && window.scrollY <= 300 && !isCollapsed) {
  //            pagemenu.style.display = 'none';
  //            toolsused.style.display = 'none';
  //            isCollapsed = true;
  //        }
  //    });
  //
  //    function toggleMenus() {
  //        isCollapsed = !isCollapsed; // Toggle menu state
  //        for (var i = 0; i < menus.length; i++) {
  //            menus[i].style.display = isCollapsed ? 'none' : 'block';
  //        }
  //    }
  //
  //    button.addEventListener('click', function(event) {
  //        toggleMenus();
  //        event.stopPropagation(); // Prevent the click event from propagating further
  //    });
  //
  //    document.addEventListener('click', function(event) {
  //        if (!button.contains(event.target)) { // If the clicked target is not the button
  //            isCollapsed = true; // Collapse the menu
  //            for (var i = 0; i < menus.length; i++) {
  //                menus[i].style.display = 'none';
  //            }
  //        }
  //    });
  //});
  
  
  //This works although now the mobile menu needs clicked twice.
  //
  //document.addEventListener('DOMContentLoaded', function() {
  //    var pagemenu = document.querySelector('#pagemenu');
  //    var toolsused = document.querySelector('.toolsused');
  //    var isCollapsed = true; // Flag to track menu state
  //    var collapseButton = document.getElementById('collapseButton');
  //    var menus = document.querySelectorAll('.menu');
  //    var button = document.getElementById('collapseButton');
  //
  //    window.addEventListener('scroll', function() {
  //        if (window.scrollY > 300) {
  //            collapseButton.style.display = 'block';
  //        } else {
  //            collapseButton.style.display = 'none';
  //        }
  //
  //        if (window.innerWidth > 700 && window.scrollY > 300 && isCollapsed) {
  //            pagemenu.style.display = 'block';
  //            toolsused.style.display = 'block';
  //            isCollapsed = false;
  //        } else if (window.innerWidth > 700 && window.scrollY <= 300 && !isCollapsed) {
  //            pagemenu.style.display = 'none';
  //            toolsused.style.display = 'none';
  //            isCollapsed = true;
  //        }
  //    });
  //
  //    function toggleMenus() {
  //        isCollapsed = !isCollapsed; // Toggle menu state
  //        // Update the display property of pagemenu and toolsused directly
  //        // instead of iterating through all menus
  //        pagemenu.style.display = isCollapsed ? 'block' : 'none';
  //        toolsused.style.display = isCollapsed ? 'block' : 'none';
  //    }
  //
  //    button.addEventListener('click', function(event) {
  //        // Toggle menus visibility
  //        toggleMenus();
  //        event.stopPropagation(); // Prevent the click event from propagating further
  //    });
  //
  //    // Add click event listener to both pagemenu and toolsused
  //    pagemenu.addEventListener('click', function(event) {
  //        event.stopPropagation(); // Prevent the click event from propagating further
  //    });
  //
  //    toolsused.addEventListener('click', function(event) {
  //        event.stopPropagation(); // Prevent the click event from propagating further
  //    });
  //
  //    // Add click event listener to the document to hide menus if clicked outside
  //    document.addEventListener('click', function(event) {
  //        if (!button.contains(event.target)) { // If the clicked target is not the button
  //            isCollapsed = true; // Collapse the menu
  //            pagemenu.style.display = 'none';
  //            toolsused.style.display = 'none';
  //        }
  //    });
  //});
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
      var pagemenu = document.querySelector('#pagemenu');
      var toolsused = document.querySelector('.toolsused');
      var isCollapsed = true; // Flag to track menu state
      var collapseButton = document.getElementById('collapseButton');
      var menus = document.querySelectorAll('.menu');
      var button = document.getElementById('collapseButton');
  
      window.addEventListener('scroll', function() {
          if (window.scrollY > 300) {
              collapseButton.style.display = 'block';
          } else {
              collapseButton.style.display = 'none';
          }
  
          if (window.innerWidth > 700 && window.scrollY > 300 && isCollapsed) {
              pagemenu.style.display = 'block';
              toolsused.style.display = 'block';
              isCollapsed = false;
          } else if (window.innerWidth > 700 && window.scrollY <= 300 && !isCollapsed) {
              pagemenu.style.display = 'none';
              toolsused.style.display = 'none';
              isCollapsed = true;
          }
      });
  
      function toggleMenus() {
          isCollapsed = !isCollapsed; // Toggle menu state
          for (var i = 0; i < menus.length; i++) {
              menus[i].style.display = isCollapsed ? 'none' : 'block';
          }
      }
  
      button.addEventListener('click', function(event) {
          toggleMenus();
          event.stopPropagation(); // Prevent the click event from propagating further
      });
  
      document.addEventListener('click', function(event) {
          if (window.innerWidth <= 700) { // Only collapse if window width is less than or equal to 700px
              if (!button.contains(event.target)) { // If the clicked target is not the button
                  isCollapsed = true; // Collapse the menu
                  for (var i = 0; i < menus.length; i++) {
                      menus[i].style.display = 'none';
                  }
              }
          }
      });
  });
  
  
  
  
  
  
  
  
  
  