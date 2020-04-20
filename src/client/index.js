const regeneratorRuntime = require("regenerator-runtime");

// -- FETCH API INFORMATION -- //


const getCoordinates = async (city, state, country) => {

		let geoUsername = process.env.GEONAMES_USERNAME;
		let baseURL = "https://secure.geonames.org/geoCodeAddressJSON?q=";
		
		/*
				TEST DATA

				streetNumber = "6";
				streetName = "Museumplein";
				city = "amsterdam";
		*/

		let requestConfig = await fetch(`${baseURL}+${city}+${state}+${country}&username=${geoUsername}`);

				try {

						const geoResponse = await requestConfig.json();
						console.log(geoResponse.address.lat);
						console.log(geoResponse.address.lng);
						console.log(geoResponse.address.postalcode + " " + "Postal Code");
						console.log(geoResponse.address.adminName1);
						console.log(geoResponse.address.locality);

						let latitude = geoResponse.address.lat;
						let longitude = geoResponse.address.lng;

						return [latitude, longitude];

				}

				catch (error) {

						console.log("Couldn't get response from geonames", error);
						console.log(requestConfig);

				}

}

const getWeather = async (latitude, longitude, departureDate, daysApart) => {

		let weatherKey = process.env.WEATHERBIT_KEY;
		let currentURL =`https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${weatherKey}`;
		let forecastURL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${weatherKey}`;

		let weatherURL = currentURL;

		if (daysApart >= -7 && daysApart <= 7) {

				weatherURL = currentURL;				
				console.log("Today's weather");

		}

		else if (daysApart > 7) {

				weatherURL = forecastURL;				
				console.log("Forecast");

		}

		else {

				console.log("Historical weather");
		}
		
		let requestConfig = await fetch(weatherURL);

			try {

					const weatherResponse = await requestConfig.json();
					console.log(weatherResponse);

					let obTime = weatherResponse.data[0].ob_time;
					let temp = weatherResponse.data[0].temp;
					let precip = weatherResponse.data[0].precip;
					let clouds = weatherResponse.data[0].clouds; 
					let countryCode = false;

					if (daysApart > 7) {

							countryCode = weatherResponse.country_code;
							console.log(countryCode);

					}

					else {

							countryCode = weatherResponse.data[0].country_code;
							console.log(countryCode);
					}


					let requestCountry = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);

							try {

									let countryResponse = await requestCountry.json();
									
									let countryName = countryResponse.name;
									let countryCapital = countryResponse.capital;
									let countryCurrency = countryResponse.currencies[0].name;
									let countryLanguage = countryResponse.languages[0].name;

									console.log(`Observed: ${obTime} Temperature: ${temp} Chance of percipitation: ${precip} Cloud coverage: ${clouds} Country: ${countryName} Capital: ${countryCapital} Currency: ${countryCapital} Language: ${countryLanguage}`);

									return [obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage];

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
						
						return countryPicURL;

		}

		catch (error) {

				console.log("Couldn't get response from pixabay", error);
				console.log(requestConfig);

		}

}

export { getCoordinates, getWeather, getPicture };