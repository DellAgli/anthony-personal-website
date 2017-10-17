$(document).ready(function(){
	var example1 = new Vue({
	el: '#projects-space',
	data: {
		projects : PROJECTS
	}
	})
   });

 jQuery(window).on('load', function(){
     var $container = $('#projects-space');
    // initialize masonry
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
 });
