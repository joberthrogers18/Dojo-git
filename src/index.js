const Patient = require('./patient.js');


function showInfoUsingConsole() {
    
    var name = 'Jose';
    var codigo = '0001';

    const patient = new Patient(name, codigo);

    console.log(patient.getPatientInfo());

    console.log(patient.getPatientAge());
    // mostrar dados do paciente
    // Nome: Fulano
    // idade: 25
}

showInfoUsingConsole();
