const compareDates = (now, departureDate) => {

		let daysApart = (departureDate-now)/86400000;

		return daysApart;

}

export { compareDates };