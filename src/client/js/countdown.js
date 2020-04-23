import { compareDates } from './compareDates.js';

const countdown = (now, departureDate) => {

let daysApart = compareDates(now, departureDate);
daysApart = Math.round(daysApart);

let displayDiv = document.getElementById("countdown");

		if (daysApart > 1) {
		
				displayDiv.innerHTML = `Your trip is only ${daysApart} days away!`;
		}

		if (daysApart = 1) {
		
				displayDiv.innerHTML = `Your trip is only ${daysApart} day away! (Have you packed?)`;
		}

		if (daysApart = 0) {
		
				displayDiv.innerHTML = `Better catch a Lyft!`;
		}

		if (daysApart < 0) {
		
				displayDiv.innerHTML = `Reminiscing about a trip?`;
		}

}

export { countdown };