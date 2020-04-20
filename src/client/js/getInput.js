const getInput = () => {

		let city = document.getElementById("city").value;
		let state = document.getElementById("state").value;
		let country = document.getElementById("country").value;
		let departureDay = document.getElementById("day").value;
		let departureMonth = document.getElementById("month").value;
		let departureYear = document.getElementById("year").value
		let departureDate = new Date(departureYear, departureMonth-1, departureDay);
		
		let userSubmit = document.getElementById("userSubmit").value;

		return [city, state, country, departureDay, departureMonth, departureYear, departureDate];
		
}

export { getInput };