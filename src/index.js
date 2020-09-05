 const Patient = require('./patient.js');


function showInfoUsingConsole() {

    const patient = new Patient("name", "06577058105", "Quebrada");
    const patient = new Patient("Daniel", "4234231443", "Teste");
    const patient = new Patient("Jobs", "4234233255", "Teste2");

    console.log(patient.getPatientAge());
    // mostrar dados do paciente
    // Nome: Fulano
    // idade: 25
}

showInfoUsingConsole();
