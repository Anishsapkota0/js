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




(async()=>{
    try{
    let promiseAll = [functionOne(true),functionTwo(false),functionThree(true)]
    const result = await Promise.allSettled(promiseAll)
    console.log(result)
    }
    catch(exception){
        console.log(exception)
    }
})()
