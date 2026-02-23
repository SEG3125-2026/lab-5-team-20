const booked =[]

function bookService(service){
	document.getElementById("infoForm").style.display="block";
	document.getElementById("services").style.display="none";
	console.log("you picked " + service);
	booked.push(service);
	console.log(booked);
}

function bookStylist(stylist){
	document.getElementById("infoForm").style.display="block";
	document.getElementById("stylists").style.display="none";
	console.log("you picked " + stylist);
	booked.push(stylist);
	console.log(booked);

}

function bookEverything(){
	if(booked.length == null){
		alert("You have not booked a service and a stylist");
	}if (booked.length == 1){
		alert("You have not booked a service or a stylist");
	}
	alert("Your service has been booked.");

}


