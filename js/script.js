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
