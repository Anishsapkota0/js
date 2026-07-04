// const coding =["js","ruby","java","python","cpp"]

// const values= coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)

// const value= coding.map((item)=>{
//     console.log(item.toLocaleLowerCase)
// })
// console.log(value)

const myNums=[2,5,6,7,3,46,7,8,7,43,2,34,5]

const newNums =myNums.filter((num)=>{
    return num>5})
console.log(newNums)

const number =[]

myNums.forEach((item)=>{
    if (item>10){
        number.push(item)
    }

})

console.log(number)

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2005
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 1989,
    edition: 2012
  },
  {
    title: "Book Five",
    genre: "Fantasy",
    publish: 2005,
    edition: 2018
  },
  {
    title: "Book Six",
    genre: "Biography",
    publish: 1995,
    edition: 2001
  },
  {
    title: "Book Seven",
    genre: "Technology",
    publish: 2010,
    edition: 2020
  },
  {
    title: "Book Eight",
    genre: "Programming",
    publish: 2018,
    edition: 2023
  },
  {
    title: "Book Nine",
    genre: "Mystery",
    publish: 2001,
    edition: 2015
  }
];

const userBooks = books.filter((bk)=>{
    if(bk.publish>=2001)
        return bk
})

console.log(userBooks)
const myNumbers =[1,2,3,4,5,6,7,8]
const updatedNumbers=myNumbers.map((num)=>{
    return num+10

})
// console.log(updatedNumbers)

const newNum = myNumbers
        .map((num)=>(num*10))
        .map((num)=>(num+10))
        .filter((num)=>(num>40))
      
console.log(newNum)



const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const initialValue =0
const sumWithinitial = arr1.reduce((accumulator, currentValue)=>{
  console.log(`accumulator ${accumulator},
   current value ${currentValue}`)
  return accumulator+currentValue

},0)
console.log(sumWithinitial)


const shoppingCart =[
  {
    itemName:"JS course",
    Price:2999

  },
  {
    itemName:"Python",
    Price:999
  },
  {
    itemName:"AI",
    Price:8999
  },
  {
    itemName:"Data Science",
    Price:12999
  }
]

let Prices=shoppingCart
        .map((value)=>value.Price)
        .reduce((acc,curr)=>(acc+curr),0)

console.log(Prices)
        
// console.log("Total price for your course is ",totalSum)



