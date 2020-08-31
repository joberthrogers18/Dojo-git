class Patient {
    constructor(name, codigo){
        this.age = new Date("12/05/1998");
        this.name = name;
        this.codigo = codigo;
    }

    getPatientInfo() {
        // escreva sua solução aqui
        return{
            name: this.name,
            codigo: this.codigo,
        }
    }

    getPatientAge(){
        // escreva sua solução aqui
        return (2020 - this.age.getFullYear());
    }
}

module.exports = Patient;