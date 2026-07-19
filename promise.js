// setTimeout(()=>{
// console.log("i am 8 years old")
// },10000)


// setInterval(()=>{
// console.log("i am executed on each of three seconds")
// },3000)



//Promises 
// 3 stages 
/**
 * pending-----> execution
 * fulfilled/reject ----> operational/return
 * settlement -----> Final 
 */

// let myvar =new Promise((resolve,reject)=>{
//     resolve({name: "My name is sabal neupane"})

// })
// console.log(myvar.name)
// myvar
// .then((resolveData)=>{
//     console.log(resolveData.name)
// })
// .catch((exception)=>{
//     console.log(exception)

// })

const login=(username,password)=>{
    return new Promise((res,rej)=>{
        if(username=="admin" && password=="admin"){
        res({
            id : 1 ,
            name : "Anish",
            username: "admin",
            address :" Hetauda"
        })}
        else{
            rej({
                error: "Invalid username or password"
            })
        }
    })
    }



// login("admin","admi")
// .then((resolveData)=>{
//     console.log(resolveData)
// })
// .catch((err)=>{
//     console.log(err)

// })

// login("admin","admin")
// .then((resolveData)=>{
//     console.log(resolveData)
// })
// .catch((err)=>{
//     console.log(err)

// })

const functionOne=(data)=>{
    return new Promise((res,rej)=>{
        if(data){
            res("Iam from function one")
        }
        else{
            rej("I am reject from function one")
        }

    })
}
const functionTwo=(data)=>{
    return new Promise((res,rej)=>{
        if(data){
            res("Iam from function Two")
        }
        else{
            rej("I am reject from function Two")
        }

    })
}

const functionThree=(data)=>{
    return new Promise((res,rej)=>{
        if(data){
            res("Iam from function Three")
        }
        else{
            rej("I am reject from function Three")
        }

    })
}



// functionONe(true)
// .then((resolveData)=>{
//     console.log(resolveData)

// })
// .catch((error)=>{
//     console.log(error)

// })


// functionTwo(false)
// .then((resolveData)=>{
//     console.log(resolveData)

// })
// .catch((error)=>{
//     console.log(error)

// })

// functionThree(true)
// .then((resolveData)=>{
//     console.log(resolveData)

// })
// .catch((error)=>{
//     console.log(error)

// })



// const functionOne = async(x)=>{
//     if (x){
//         return " I am from function one"
//     }
//     else{
//         throw " I am rejected from function one"

//     }

// }


const handler=async()=>{
    try{
    let resolveOne =await functionOne(true)
    console.log(resolveOne)
    let resolveTwo =await functionTwo(true)
    console.log(resolveTwo)
    let resolveThree =await functionThree(false)
    console.log(resolveThree)  
    }  catch(exception) {
        console.log(exception)

    }
}
handler()