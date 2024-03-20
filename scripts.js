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


/* Responsive mobile Navbar */

   function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
            x.className += " responsive";
            } else {
                x.className = "topnav";
                }
                }




