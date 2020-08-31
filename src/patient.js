class Patient {
	constructor(name) {
		this.name = name;
		this.age = new Date("12/05/1998");
	}

	getPatientInfo() {
		return {
			name: this.name,
			age: this.getPatientAge(),
		};
	}

	getPatientAge() {
		const today = new Date();

		const today_year = today.getFullYear();
		const today_month = today.getMonth();
		const today_day = today.getDate();

		let age = today_year - this.age.getFullYear();

		if (today_month < this.age.getMonth() - 1) {
			age--;

			if (today_day < this.age.getDate()) {
				age--;
			}
		}
		return age;
	}
}

module.exports = Patient;
