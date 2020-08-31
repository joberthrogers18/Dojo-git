const Patient = require('./patient.js');

function showInfoUsingConsole() {
    const patient = new Patient("name");

    console.log(patient.getPatientInfo());
}

showInfoUsingConsole();
