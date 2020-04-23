const displayWeather = (obTime, temp, precip, clouds, countryName, countryCapital, countryCurrency, countryLanguage) => {

		let displayWeather = document.getElementById("weather");
		let displayCountryInfo = document.getElementById("countryInfo");

		displayWeather.innerHTML = `
				<h5>Weather observed at ${obTime}</h5>
				<h1>${temp}&#730;</h1>
				<h4>Percipitation</h4>
				<p>${precip}&percnt;</p>
				<h4>Clouds</h4>
				<p>${clouds}&percnt;</p>
		`;

		displayCountryInfo.innerHTML = `
				<h3>About visiting country</h3>
				<p><span class="bold">Official name:</span> ${countryName}<p/>
				<p><span class="bold">Capital:</span> ${countryCapital}<p/>
				<p><span class="bold">Currency:</span> ${countryCurrency}<p/>
				<p><span class="bold">Currency:</span> ${countryLanguage}<p/>
		`;

}

export { displayWeather };