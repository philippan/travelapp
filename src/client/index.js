const regeneratorRuntime = require("regenerator-runtime");

// -- USER INTERFACE -- // 

import "./js/app.js";


// -- FETCH API INFORMATION -- //


const getLocation = async (streetNumber, streetName, city) => {


		let baseURL = "http://api.geonames.org/geoCodeAddressJSON?q=";
		let geoUsername = "finleydunne";
		streetNumber = "6";
		streetName = "Museumplein";
		city = "amsterdam";
		

		let requestConfig = await fetch(`${baseURL}${streetName}+${streetNumber}+${city}&username=${geoUsername}`);

				try {

						const geoResponse = await requestConfig.json();
						console.log(geoResponse.address.lat);
						console.log(geoResponse.address.lng);
						

						let latitude = geoResponse.address.lat;
						let longitude = geoResponse.address.lng;

						getCoordinates(latitude, longitude);

				}

				catch (error) {

						console.log("Couldn't get response from geonames", error);
						console.log(requestConfig);

				}

}

const getCoordinates = async (latitude, longitude) => {

		let baseURL = "https://api.weatherbit.io/v2.0/current?";
		let locoKey = "6a3adea572ec42508d740188ade861b3";
		
		let requestConfig = await fetch(`${baseURL}&lat=${latitude}&lon=${longitude}&key=${locoKey}`);

			try {

					const locoResponse = await requestConfig.json();

					let obTime = locoResponse.data[0].ob_time;
					let temp = locoResponse.data[0].temp;
					let precip = locoResponse.data[0].precip;
					let clouds = locoResponse.data[0].clouds; 
					let countryCode = locoResponse.data[0].country_code;


					let requestCountry = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);

							try {

									let countryResponse = await requestCountry.json();
									
									let countryName = countryResponse.name;
									let countryCapital = countryResponse.capital;
									let countryCurrency = countryResponse.currencies[0].name;
									let countryLanguage = countryResponse.languages[0].name;

									console.log(`Observed: ${obTime} Temperature: ${temp} Chance of percipitation: ${precip} Cloud coverage: ${clouds} Country: ${countryName} Capital: ${countryCapital} Currency: ${countryCapital} Language: ${countryLanguage}`);

									getPicture(countryName);

							}


							catch (error) {

									console.log("Couldn't get response from restcountries", error);
									console.log(requestCountry);
							}
					

			}

			catch (error) {

						console.log("Couldn't get response from weatherbit", error);
						console.log(requestConfig);

			}

}

const getPicture = async (country) => {

	let baseURL = "https://pixabay.com/api/?";
	let pixaKey = "16017582-ad9041b9831f65adba01f42bb";

	let requestConfig = await fetch(`${baseURL}&key=${pixaKey}&q=${country}&image_type=photo&order=popular`);

		try {

						const pixaResponse = await requestConfig.json();
						
						let countryPicURL = pixaResponse.hits[1].largeImageURL;
						console.log(countryPicURL);

		}

		catch (error) {

				console.log("Couldn't get response from pixabay", error);
				console.log(requestConfig);

		}

}

getLocation();