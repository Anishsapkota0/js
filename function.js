function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("--------------")
}


function addTwoNumbers(number1,number2){
   let result = (number1+number2)
   return result
}
let r = addTwoNumbers(2,30)
// console.log(r)

function calculator(num1,num2){
    let addition = num1 + num2
    let subtraction=num1 - num2
    let multiplication =num1 * num2
    let division =num1/num2
    let moduloDivision=num1%num2
    let result =[`addition of ${num1} and ${num2} is  ${addition}`,
                  `subtraction of ${num1} and ${num2} is  ${subtraction}`,
                  `multiplication of ${num1} and ${num2} is  ${multiplication}`,
                  `Division of ${num1} and ${num2} is  ${division}`,
                  `ModuloDivision of ${num1} and ${num2} is  ${moduloDivision}`]
    return result
}
// let calculatedValue =calculator(6,2)
// console.log(calculatedValue)

function calculateCartPrice (num1){
    return num1

}
// console.log(calculateCartPrice(200))

function spreadOperator(num2,...num1){
    return num1+ num2
}

// console.log(spreadOperator(100,300,400,56,76,77,89))

const user ={
    username:"anish",
    price: 199
}

function handleUser (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleUser(user)
// handleUser({
//     username:"shyam",
//     price:200
// })

const myNewArray =["anish","anil","gajendra","babit","Bhanu"]

function myArray(anyArray){
    console.log(anyArray[1])
}

// myArray(["buffalo","cow"])

// myArray(myNewArray)


function one(){
    const username ="Anish"

    function two(){
        const website =" youtube"
        console.log(username)
    }
    // console.log(website) s s 
    two()
}
// one()

// if (true){
//     const username = "hitesh"
//     if (username === "hitesh"){
//         const website =" youtube"
//         console.log(username+website)
//     }
//     // console.log(website)
// }
// console.log(username)

// +++++++++++interesting++++++++++++
console.log(addone(5))   //hoisting
function addone(num){
    return num+1

}
console.log(addone(5))

const addTwo =function(num)
{
    return num+2
}

console.log(addTwo(9))
