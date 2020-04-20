const regeneratorRuntime = require("regenerator-runtime");
const now = new Date(); 


import { getInput } from './getInput.js';
import { getCoordinates, getWeather, getPicture } from '../index.js';
import { compareDates } from './compareDates.js';


// APP FUNCTION

const appResponse = async () => {

		let whichWeather = "past";

		let [city, state, country, departureDay, departureMonth, departureYear, departureDate] = await getInput();
		
		let daysApart = await compareDates(now, departureDate);

		let [latitude, longitude] = await getCoordinates(city, state, country);

		let [obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage] = await getWeather(latitude, longitude, departureDate, daysApart);
		
		let countryPicURL = await getPicture(countryName);

}


// EVENT LISTENERS


// ----- Click Get Weather button

userSubmit.addEventListener("click", appResponse);


// ----- Keyup Get Weather fields

document.querySelectorAll('.userInput').forEach(item => {

		item.addEventListener('keyup', event => {

				if (event.keyCode === 13) {
						event.preventDefault();
						appResponse();
				}
		})

});