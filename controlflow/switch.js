let day = "sunda";
switch(day){
    case "sunday":
        console.log("today is sunday")
        break;
    case "Monday":
        console.log("today is monday")
        break;
    default:
        console.log("other days")
    

}


let userObj = {
    name : "anish sapkota",
    phone: "9868828797"
}
let a=Object.keys(userObj).length

if (a===0){
    console.log("it is truthy value")
}

//Nullish coalescing operator(??): null defined
let val1
// val1 =5 ?? 10
val1= null?? 10
console.log(val1)

// Ternary operaror
//condition ? true : false

const iceTeaPrice =80;
(iceTeaPrice >= 90) ? console.log("price is greater than 90"):console.log("price is less than 90")


