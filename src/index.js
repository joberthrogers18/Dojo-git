const Patient = require("./patient.js");

function showInfoUsingConsole() {
	const patient = new Patient("caio");

	console.log(patient.getPatientInfo());
	// mostrar dados do paciente
	// Nome: Fulano
	// idade: 25
}

showInfoUsingConsole();
