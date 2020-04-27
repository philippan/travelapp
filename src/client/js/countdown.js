import { compareDates } from './compareDates.js';

const countdown = (now, departureDate) => {

let daysApart = compareDates(now, departureDate);

let displayDiv = document.getElementById("countdown");

		if (daysApart > 1) {
		
				daysApart = Math.round(daysApart);
				displayDiv.innerHTML = `
						<h4>Countdown</h4>
						<p>Your trip starts in ${daysApart} days</p>
				`;
		}

		if (daysApart >= 1 && daysApart <= 1.5) {
		
				displayDiv.innerHTML = `
						<p>Your trip starts tomorrow</p>
				`;
		}

		if (daysApart < 1 && daysApart > -1) {
		
				console.log("Countdown: " + daysApart);

				displayDiv.innerHTML = `
						<h4>Countdown</h4>
						<p>Your trip is today</p>
				`;

		}

		if (daysApart <= -1) {
		
				displayDiv.innerHTML = `
						<h4>Countdown</h4>
						<p>Reminiscing about a trip?</p>
				`;
		}

}

export { countdown };