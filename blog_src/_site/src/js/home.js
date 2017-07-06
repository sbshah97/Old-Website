$( document ).ready(function(){
	$("#sidenav").sideNav();
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.home-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.home-page-banner').height());
    });
});
