class Person {
    //Properties data
    name ='';
    address = '';
    email ='';
    phone = '';

    setName(_name){
        this.name = _name

    }

    getName=()=>{
        return this.name

    }
}

// Person.prototype.role = "user"


const personObj = new Person()
personObj.name = "Anish Sapkota"
personObj.address = "Hetauda"
personObj.email = "anishsapkota265@gmail.com"
personObj.phone= "986828797"
console.log(personObj)
