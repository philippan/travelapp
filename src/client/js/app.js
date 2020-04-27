const regeneratorRuntime = require("regenerator-runtime");
const now = new Date(); 
const userSubmit = document.getElementById("userSubmit"); 
const userReset = document.getElementById("userReset"); 


import { getInput } from './getInput.js';
import { getCoordinates, getWeather, getPicture } from '../index.js';
import { compareDates } from './compareDates.js';
import { countdown } from './countdown.js';
import { displayWeather } from './displayWeather.js';
import { displayNoResults } from './displayNoResults.js';
import { loadStart, loadEnd } from './loadTransition.js';
import { appReset } from './appReset.js';

import  '../styles/index.scss';


// APP FUNCTION

const appResponse = async () => {

		let [city, state, country, departureDay, departureMonth, departureYear, departureDate, departureDisplay] = await getInput();

		loadStart();
	
		let daysApart = await compareDates(now, departureDate);

		let [latitude, longitude] = await getCoordinates(city, state, country);

		let [obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage] = await getWeather(latitude, longitude, departureDate, daysApart);

				try {

						displayWeather(daysApart, departureDisplay, obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage);
						countdown(now, departureDate);
						
						loadEnd();
						
						
    			}

				catch (error) {
		
						let countryPicURL = await getPicture(countryName);

						displayNoResults(countryPicURL);
						countdown(now, departureDate);
						
						loadEnd();
						
				}
		
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

// ----- Click to Reset button

userReset.addEventListener("click", appReset);