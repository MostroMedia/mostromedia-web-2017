// Funciones del Sitio

// Initialize collapse button
$(".button-collapse").sideNav({
		menuWidth: 100, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});
// Initialize collapsible   
$('.collapsible').collapsible();