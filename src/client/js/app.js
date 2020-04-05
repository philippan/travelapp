const inputLocation = document.getElementById("inputLocation");
const submitLocation = document.getElementById("submitLocation");


// ----- USER ACTIONS ----- //

const getValue = () => {

		let userLocation = inputLocation.value;
		console.log(userLocation);
}

// CLICK GET WEATHER BUTTON 

submitLocation.addEventListener("click", getValue);

// FIELD ENTER KEYPRESS 

inputLocation.addEventListener("keyup", function () {

		if (event.keyCode === 13) {
				event.preventDefault();
				getValue();
		}

}); 