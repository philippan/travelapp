const displayNoResults = (countryPicURL) => {

		let displayDiv = document.getElementById("weather");

		displayDiv.innerHTML = `Go visit this URL ${countryPicURL}`;

}

export { displayNoResults };