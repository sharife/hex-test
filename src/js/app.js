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
  $('.intro1').animate({'opacity':'1', 'margin-left': '0'},700);
  // $('.intro1').addClass('scaler');
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


$(function(){ 
  var $el = $(".example:first"), text = $el.text(),
      words = text.split(" ");

  var html = "";
  for (var i = 0; i < words.length; i++) {
      html += "<span>" + words[i] + " </span>";
  };
  $el.html(html).children().hide().each(function(i){
    $(this).delay(i*500).fadeIn(700);
  });
});