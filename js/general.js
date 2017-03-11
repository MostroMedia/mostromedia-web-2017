// Funciones del Sitio

// Initialize collapse button
$(".button-collapse").sideNav({
	/* var w = $(window).width();   Se debe detectar el tamaño del movil para activar la opción de 
		if(w < 768){				closeOnClick: true : de lo contrario el menu no se cerrara al dar clic para navegar
			menuWidth: 200, // Default is 300
		    edge: 'left', // Choose the horizontal origin
		    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		    draggable: true // Choose whether you can drag to open on touch screens
		}
		else{
			menuWidth: 200, // Default is 300
		    edge: 'left', // Choose the horizontal origin
		    //closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		    draggable: true // Choose whether you can drag to open on touch screens
		} */
		menuWidth: 200, // Default is 300
		edge: 'left', // Choose the horizontal origin
		//closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});
// Initialize collapsible   
$('.collapsible').collapsible();