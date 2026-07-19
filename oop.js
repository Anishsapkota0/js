class ToyotaCar {
    constructor(brand){
        console.log("enter parent constructor")
        this.brand =brand
    }
   start(){
    console.log("start")
   }

   stop(){
    console.log("stop")
   }
}

// let fortuner =new ToyotaCar("fortuner")
// console.log(fortuner)

// console.log(fortuner.start())

// let lecus= new ToyotaCar()

// lecus.serBrand("lecussss")
// console.log(lecus.brandName)



class Person {

    constructor(name){
        this.name = name
        console.log("enter parent constructor")
    }
    eat(){
        console.log("Eat")
    }
    sleep(){
        console.log("Sleep")
    }
    work(){
        console.log("Do Nothing")
    }
}

class Engineer extends Person{
    constructor(name){
        console.log("enter child constructor")
        super(name)   //to invoke parent class constructor
        console.log("exit child constructor")
    }
    work(){
        super.eat()
        console.log("solve problems,build somethings")
    }
}

class Doctor extends Person{
    work(){
        console.log("Treats patients ")
    }
}

let anishObj= new Engineer("chemical enginner")
anishObj.work()


