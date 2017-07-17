function init_home() {
	
	(function($){
  		$(function(){
    		$('.button-collapse').sideNav();
  		}); // end of document ready
	})(jQuery); // end of jQuery name space
	
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.home-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.home-page-banner').height());
    });
}

function init_projects() {
	$(document).ready(function(){
		$('.carousel').carousel();
		$('.slider').slider({'interval': 4000});
	    $('.button-collapse').sideNav();
    });
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.projects-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() <= $('.projects-page-banner').height());
    });	
    load_projects(1);
}

function init_academics() {
	$(document).ready(function(){
		$('.carousel').carousel();
		$('.slider').slider({'interval': 4000});
	    $('.button-collapse').sideNav();
    });
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.academics-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.academics-page-banner').height());
    });		
}

function init() {
	$(document).ready(function(){
		$('.carousel').carousel();
		$('.slider').slider({'interval': 4000});
	    $('.button-collapse').sideNav();
    });
	$(document).scroll(function() { 
		var $nav = $('.navbar-fixed');
		$nav.find('nav').toggleClass('orange', $(this).scrollTop() > $('.blog-page-banner').height());
		$nav.find('nav').toggleClass('transparent', $(this).scrollTop() < $('.blog-page-banner').height());
    });
}

function get_project(project_name) {
	project = "";
	project += '<div class="container"><div class="card horizontal">';
	project += '<div class="row"><div class="col s6">';
	project += '<img src="images/projects/' + project_name.image + '" class="responsive-img" style="padding:5%">'; 
	project += '</div><div class="col s6">';
	project += '<div class="card-stacked"><div class="card-title">';
	project += '<h4 class="pt-sans" style="text-align:center">' + project_name.title + '</h4>';
	project += '</div><div class="card-content">';
	project += '<p class="flow-text">' + project_name.description + '</p></div>';
	project += '<div class="card-content"><div class="row">';
	project += '<div class="col s4"><div class="card-action">';
	project += '<a href="' + project_name.readme_link + '">README</a></div></div>';
	project += '<div class="col s6 push-s1"><div class="card-action">';
	project += '<a href="' + project_name.github_link + '">Source Code</a>'
	project += '</div></div></div></div></div></div></div></div></div>'
	return project;
}

function load_projects(val) {
	if(val == 1) {
		var project_container = document.getElementById("featured_projects"); 
		for(var i=0; i < featured_projects.length; i++) {
			var project = '';
			var project_name = featured_projects[i];
			
			project_container.innerHTML += get_project(project_name);
		
			console.log(project_container);
		}
	}
	else if(val == 2) {
		var project_container = document.getElementById("android"); 
		for(var i=0; i < android.length; i++) {
			var project = '';
			var project_name = android[i];
			
			project_container.innerHTML += get_project(project_name);
		}
	}
	else if(val == 3) {
		var project_container = document.getElementById("web"); 
		for(var i=0; i < web.length; i++) {
			var project = '';
			var project_name = web[i];
			
			project_container.innerHTML += get_project(project_name);
		}
	}
	else if(val == 4) {
		var project_container = document.getElementById("ml"); 
		for(var i=0; i < ml.length; i++) {
			var project = '';
			var project_name = ml[i];
			
			project_container.innerHTML += get_project(project_name);
		}
	}
	else if(val == 5) {
		var project_container = document.getElementById("app_dev"); 
		for(var i=0; i < app_dev.length; i++) {
			var project = '';
			var project_name = app_dev[i];
			
			project_container.innerHTML += get_project(project_name);
		}
	}
	else if(val == 6) {
		var project_container = document.getElementById("cp"); 
		for(var i=0; i < cp.length; i++) {
			var project = '';
			var project_name = cp[i];
			
			project_container.innerHTML += get_project(project_name);
		}
	}
	else {
		var project_container = document.getElementById("others"); 
		for(var i=0; i < others.length; i++) {
			var project = '';
			var project_name = others[i];
			
			project_container.innerHTML += get_project(project_name);
		}	
	}
}

