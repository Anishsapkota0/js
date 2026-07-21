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
    constructor(name,email,address,phone,className,section){
    super(name ,email ,address ,phone);

    this.className=className;
    this.section =section
    }


}

const UserObj = new UserProfile("anish", "anish@gmail.com","Hetauda","9868828797")
console.log(UserObj)


const StudentObj= new Student("abhinav","abhinav@gmail.com","Lokanthaki",746748,"mooon","Einstein")
// StudentObj.name ="Anish Sapkota"

console.log(StudentObj)