class Patient {
    constructor(name, cpf, endereco){
        this.name = name
        this.cpf = cpf;
        this.address = endereco;
        this.age = new Date("12/05/1998");
    }

    getPatientInfo() {
        // escreva sua solução aqui    
        console.log({
            name: this.name,
            address: this.address,
            age: 22
        });
    }

    getPatientAge(){
        // escreva sua solução aqui
    }
}

module.exports = Patient;