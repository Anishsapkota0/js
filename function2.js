function sum(a,...b){
    console.log(a,b)

}

sum(5,2,3,4,5,6,7)


const sumUpTo=(n)=>{
    let sum =0
    for(let i =0;i<=n;i++){
        sum+=i
    }
    return sum
}
console.log(sumUpTo(30))

// Types of functions 
  /**
   * Built in 
   * custom /user defined
   */

const func1= () =>  true


const func2=(x)=>{
    if(x){
        console.log("Iam inside function if")
    }
    else{
        console.log("Iam inside else")
    }
}

let result= func1()
func2(result)

// If we define function within another function then it is called clouser property

function outer(){
    let username ="Anish"
    function inner(){
        console.log("Inner",username)
    }
    inner()

}
outer()
// console.log(username)



//CLosure 


