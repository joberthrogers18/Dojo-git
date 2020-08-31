const Patient = require('./patient.js');


function showInfoUsingConsole() {
    const patient = new Patient("name", "06577058105", "Quebrada");

    patient.getPatientInfo();
    // mostrar dados do paciente
    // Nome: Fulano
    // idade: 25
}

showInfoUsingConsole();
