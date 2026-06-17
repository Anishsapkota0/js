/**
 * iteration and repetetation
 */

let i =1
for(i=1; i<=10; i++){
    console.log(i)
}

for (let j =0 ;j<=20; j++){
    console.log(j++)
}

for (i=1;i<=5;i++){
    let toPrint=""
    for(j=1;j<=5;j++){
        toPrint+= "* * "
}
    console.log(toPrint)
}

for(let k =1;k<=5;k++){
    let toPrint=""
    for(let l=5;l>=k;l--){
        toPrint+="*   "
    }
    console.log(toPrint)
}

let userList=[
    {_id:1, name :"anish sapkota", email:"abc@gmail.com", address:"Hetauda"},
    {_id:2, name :"anil acharya", email:"abcd@gmail.com", address:"Dhading"},
    {_id:3, name :"Gajendra basnet", email:"abcde@gmail.com", address:"Chatara"}
]
console.log(userList.length)

for (i=0;i<=2;i++){
    console.log("id= ",userList[i]._id)
    console.log("name= ",userList[i].name)
    console.log("email= ",userList[i].email)
    console.log("address= ",userList[i].address)
    console.log("-------------------------------")
}
for (let k in userList){
    console.log("id= ",userList[k]._id)
    console.log("name= ",userList[k].name)
    console.log("email= ",userList[k].email)
    console.log("address= ",userList[k].address)
    console.log("-------------------------------")
}
for (let j in userList){
    let user=userList[j]
    console.log("id= ",user._id)
    console.log("name= ",user.name)
    console.log("email= ",user.email)
    console.log("address= ",user.address)
    console.log("-------------------------------")
}

for (let user1 of userList){     // for of loop assign objects whereas for in loop return index
    console.log("id= ",user1._id)
    console.log("name= ",user1.name)
    console.log("email= ",user1.email)
    console.log("address= ",user1.address)
    console.log("-------------------------------")
}


let productInformations=[
    {id :123, name:"product One", price :1000, discountInPercentage : 10},
    {id :234, name:"product Two", price :2000, discountInPercentage : 3},
    {id :345, name:"product Three", price :1800, discountInPercentage :7},
]

for (let i in productInformations){
    console.log("Product Id: ",productInformations[i].id)
    console.log("Product name: ",productInformations[i].name)
    console.log("Product price: Npr. ",productInformations[i].price)
    console.log("Discount Percentage: ",productInformations[i].discountInPercentage,"%")
    console.log("Discount Amount: Npr.",productInformations[i].price*(productInformations[i].discountInPercentage)/100)
    console.log("Product Price after Discount : Npr.",productInformations[i].price-(productInformations[i].price*(productInformations[i].discountInPercentage)/100))
    console.log("---------------------------------------------------")

}


// documents
let document = [
    {
        title : "chapter-1 : Introduction to mern ",
        sections :[
            {
                title:"Section 1.1. what is MERN Stack?",
                sections:[
                    {
                        title:"section 1.1.1 composition of MERN",
                        sections:null,
                    },
                    {
                        title:"section 1.1.2 Stack: Framework vs Library",
                        sections:null,
                    },

                ]
            }
        ]
    },
    {
        title : "Chapter-2: Basic Programming concept",
        sections:[
            {
                title:"section 2.1 What is programming",
                sections:null,
            },
            {
            
                title:"section 2.2 Introduction to Js",
                sections:null,
            
            }
        ]

    }
]

for (let s of document){
    
    console.log(s.title)
    for (let sections1 of s.sections){
        console.log("   ",sections1.title)
        if(sections1.sections!==null){
            for (let section2 of sections1.sections){
                console.log("       ",section2.title)

        }
    }
        
        

    }
}
        
    
    




