/**
 * Arithmetic / Mathemetical operators
 */
let a = 100;
let b= 30;
let div = a/b 
console.log(div)

/** increment and decrement operators */


/**
 * Assignment Operators
 *  =, +=. -=, /=. *=
 */

/** 
 * String / concatination operatord
 * +
 * 
 */
let e = 10;
let f = "10";

console.log(e-f)

/**
 * comparision operttord
 * <, >, <=, >=,==,===,!=, !==
 * boolean
 */
console.log(e<f)
console.log(e<=f)
console.log(e>f)
console.log(e>=f)
console.log(e==f)
console.log(e===f)
console.log(e!=f)
console.log(e!==f)

/**
 * Logical operators
 * &&, !, || 
 * compares two conditions
 */


/**
 * conditional operators or ternery operator
 * (exp)? true : false
 */

/**
 * Tempelate literals 
 * `${name}`
 */


/** 
 * Object / Array Destructure 
 */

let numbers =[123,234,34,5,22,78]
let first = numbers[0]
let second  = numbers[1]
let third = numbers[2]
let fourth  = numbers[3]
let fifth  = numbers[4]

let [fi,se,th,fo,fif,six]=numbers
console.log(six)

let productInfo ={
    pName: "product Name",
    price : 1234,
    discount: 12,
    stock: 15
}
 
 let {pName,price: amount}=productInfo
 console.log(pName,amount)


/**
 * Spread and rest operators
 */


const petAnimals =["cat","dog","rabbit","mouse"]
const wildAnimals =["tiger","lion","elephant"]

let allAnimals =[...petAnimals,...wildAnimals]
console.log(allAnimals)


let allProductInfo ={
    ...productInfo
}
console.log(allProductInfo)


// shallow copy
let user1 ={
    name :"user Name",
    email:"name1@gmail.com"
}

let user2 =user1     //copy all references

console.log(user1)

user2.name ="new userName"
console.log(user1)

// Deep copy 
let userDeepCopy =JSON.parse(JSON.stringify(user1))
console.log(user1)
userDeepCopy.name="anish sapkota"
console.log(user1)
