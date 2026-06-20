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
    return num1+ " "num2
}

console.log(spreadOperator(100,300,400,56,76,77,89))