class Patient {
    constructor(){
        this.name = "teste";
        this.descricao = "paciente de teste"
        this.age = new Date("12/05/1998")
    }

    getPatientInfo() {
        return{
            name: this.name,
            descricao: this.descricao
        }
    }

    getPatientAge(){
        return new Date().getFullYear() - this.age.getFullYear();
    }
}

module.exports = Patient;