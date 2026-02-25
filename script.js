let selectedService = null;


function bookService(service){
	document.getElementById("infoForm").style.display="block";
	document.getElementById("services").style.display="none";
	selectedService = service;
}


function bookEverything(){

	event.preventDefault();

	if(!selectedService){
		alert("Please select a service first.");
		return;
	}
	alert("Your service has been booked.");

}


