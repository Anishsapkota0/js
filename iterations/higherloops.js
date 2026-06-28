//for of loops

// ['','','','']
// [{},{},{}]

const arr =[1,2,3,4,5]
for (let val of arr){
    console.log(val)
}
const greetings= "Hello world"
for (let lett of greetings)
    console.log(lett)

//maps

const map=new Map()
map.set("IN","India")
map.set("US","united state of America")
map.set("FR","France")
console.log(map)

for (const [key,value] of map){
    console.log(key,":-",value)
}


const myObject={
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "Swift by apple"

}

for (let key in myObject){
    console.log(key,"->",myObject[key])
}

for (let  keys in map){
    console.log(keys)
}
