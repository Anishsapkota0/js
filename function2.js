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

