 $(document).ready(function(){
     $('.parallax').parallax();
     $(".button-collapse").sideNav();
     $(".dropdown-button").dropdown(); 
   });

 jQuery(window).on('load', function(){
 	var $container = $('#projects-space');
    // initialize masonry
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
 });

