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

function datePicker(){
	const dateElem = document.getElementById("pickDate")
	const date = new Date();
	var date_conversion = date.toDateString();

	dateElem.innerHTML(`${date_conversion}`)

}