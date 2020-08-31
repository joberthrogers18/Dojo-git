class Patient {
    constructor(name){
        this.name = name;
        this.age = new Date("12/05/1998");
    }

    getPatientInfo() {
        return {
            name: this.name,
            age: this.getPatientAge(),
        }    
    }

    getPatientAge(){
        console.log(new Date().getFullYear());
        console.log(this.age.getFullYear());
        return (new Date().getFullYear() - this.age.getFullYear());
    }
}

module.exports = Patient;