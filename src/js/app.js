// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

$(function(){  // $(document).ready shorthand
  $('.intro1').animate({'opacity':'1', 'margin-left': '0'},1500, 'easeOutExpo');
  $('.header-image').animate({'opacity':'1'},1000);
  // $('.intro1').addClass('scaler');
  $('#scroll').delay(1500).animate({'opacity':'1'},700);
  $('.intro2').delay(2000).animate({'opacity':'1'},700);
  $('.intro3').delay(2500).animate({'opacity':'1'},700);
  $('.intro4').delay(2800).animate({'opacity':'1'},700);
  $('.image-l').delay(1).animate({'opacity':'1'},700);
});


$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'padding-top': '-10px'},350);
                    
            }
        });
    });
});


// $(function(){ 
//   var $el = $(".example:first"), text = $el.text(),
//       words = text.split(" ");

//   var html = "";
//   for (var i = 0; i < words.length; i++) {
//       html += "<span>" + words[i] + " </span>";
//   };
//   $el.html(html).children().hide().each(function(i){
//     $(this).delay(i*500).fadeIn(700);
//   });
// });


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          /*var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
          */
        });
      }
    }
  });