/*scrolling effecrt starts*/
$(document).ready(function(){
  $('.navScroll').click(function(e) {
    
  	var headerHeight = $('.navbar-header').outerHeight();
  	var linkHref = $(this).attr('href');
 	
  $('html, body').animate({

  		scrollTop: $(linkHref).offset().top - headerHeight
  	}, 1000);
    

    e.preventDefault();

  });
});


/*scrolling effecrt ends*/
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 101) {
    $('.skill').fadeIn(777);
  } else {
    $('.skill').fadeOut(777);
  }
});
