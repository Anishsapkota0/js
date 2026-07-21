// Inheritance 
class UserProfile {
    name;
    email;
    address;
    phone;

    constructor(name,email,address,phone){
        this.name=name
        this.email=email
        this.address=address
        this.phone =phone
    }
}

class Student extends UserProfile {
    // name ;
    // email;
    // address;
    // phone;
    constructor(className,section){
    super("anil","anil@gmail.com","Dhading","3487487");

    this.className=className;
    this.section =section
    }


}

const UserObj = new UserProfile("anish", "anish@gmail.com","Hetauda","9868828797")
console.log(UserObj)


const StudentObj= new Student("mooon","Einstein")
// StudentObj.name ="Anish Sapkota"

console.log(StudentObj)