class Person {
    //Properties data
    name ='';
    address = '';
    email ='';
    phone = '';

    constructor(_name,_address,_email,_phone){
        this.name = _name
        this.address = _address;
        this.email =_email;
        this.phone = _phone;

    }

    setName(_name){
        this.name = _name

    }

    getName=()=>{
        return this.name

    }
}

// Person.prototype.role = "user"


const personObj = new Person("anil Acharya","Dhading","anil@gmail.com","972763")
// personObj.name = "Anish Sapkota"
// personObj.address = "Hetauda"
// personObj.email = "anishsapkota265@gmail.com"
// personObj.phone= "986828797"
console.log(personObj.setName("Gajendra basnet"))
console.log(personObj.getName())




// 4 Pillars of OOP
/**
 * Abstraction 
 * Encapsulation
 * Inheritance 
 * polymorphism
 */
