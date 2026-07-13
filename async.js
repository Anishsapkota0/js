const nums = [1,2,3,4,5,6,7,8,9,10]
let sum =0
for (let i in  nums){
    sum+=nums[i]
}
console.log(sum)
nums.forEach((value,index)=>{
    sum +=value

})
console.log(sum)

const allProduct =[
    {
        name:"Product one",
        price :1000,
        discount:10
    },
    {
        name:"Product Two",
        price :1240,
        discount: 7
    },
    {
        name:"Product Three",
        price :2350,
        discount:7.5
    }
]

const results = allProduct.map((value,index)=>{
    return {
        name : value.name,
        discountPrice : (value.price)*(value.discount)/100,
        priceAfterDiscount : value.price *(1-value.discount/100)
    }

})

console.log(results)

let higherDiscount = allProduct.filter((val)=>{
    return val.discount>7

})

console.log(higherDiscount)

let sum1= nums.reduce((prev,val,ind)=>{
    
    prev+=val
    return prev

},0)
console.log(sum1)
let result = nums.every((val)=>{
    return val>1

})

console.log(result)


let result1 = nums.some((val)=>{
    return val>1

})

console.log(result1)
