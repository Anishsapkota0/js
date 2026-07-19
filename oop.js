class ToyotaCar {
    constructor(brand){
        console.log("Creating new object......")
        this.brand =brand
    }
   start(){
    console.log("start")
   }

   stop(){
    console.log("stop")
   }
}

let fortuner =new ToyotaCar("fortuner")
console.log(fortuner)

// console.log(fortuner.start())

// let lecus= new ToyotaCar()

// lecus.serBrand("lecussss")
// console.log(lecus.brandName)



class Person {

    constructor(){
        this.species = "Homo Sapiens"
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
    work(){
        console.log("solve problems,build somethings")
    }
}

class Doctor extends Person{
    work(){
        console.log("Treats patients ")
    }
}

let anishObj= new Engineer()
anishObj.eat()


let p1 = new Person()
console.log(p1)