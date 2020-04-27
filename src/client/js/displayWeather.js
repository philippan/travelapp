const displayWeather = (daysApart, departureDisplay, obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage) => {

		let displayWeather = document.getElementById("weather");
		let displayCountryInfo = document.getElementById("countryInfo");
	
		/* Define cast */

		let cast = "daysApart";

		if (daysApart < 1 && daysApart > -1) {

				cast = "Current";	

		}

		else if (daysApart > 7) {

				cast = "Forecast";			

		}

		else {

				cast = departureDisplay;

		}

		/* Display */

		displayWeather.innerHTML = `
			
				<div class="item1">
						<h1>${temp}&#730;</h1>
						<p id="cast">${cast}</p>
				</div>

				<div class="weatherDetails">
						
						<div class="item2">
								<h4>Percipitation</h4>
								<p>${precip}&percnt;</p>
						</div>

						<div class="item3">
								<h4>Clouds</h4>
								<p>${clouds}&percnt;</p>
						</div>

						<div class="item4">
								<h4>Observed</h4>
								<p>${obTime}</p>
						</div>

				</div>

		`;

		displayCountryInfo.innerHTML = `
				<h4>About visiting country</h4>
				<p><span class="bold">Official name:</span> ${countryName}<p/>
				<p><span class="bold">Capital:</span> ${countryCapital}<p/>
				<p><span class="bold">Currency:</span> ${countryCurrency}<p/>
				<p><span class="bold">Currency:</span> ${countryLanguage}<p/>
		`;

}

export { displayWeather };