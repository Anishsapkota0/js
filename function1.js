//In this session we are going to learn about this and arrow functions
let name = "Gajendra"
const user ={
    username : "anish",
    price : 999,
    welcomeMessage: function (){
        console.log(`${this.username},welcome to website`)
    }

}
user.welcomeMessage()
user.username = "shyam"
user.welcomeMessage()

const user1 = {
    username: "Abhinav",
    welcomeMessage: function () {
        console.log(`${this.username}, welcome`);
        console.log(this)
    }
};

const user2 = {
    username: "Ram",
    welcomeMessage: user1.welcomeMessage
};
user2.username ="hyaa"
user1.welcomeMessage(); // Anish, welcome
user2.welcomeMessage(); 
console.log(this)

// const chai=function(){
//     let username = "hitesh"
//     console.log(this.username)
// }



// const chai= function (){
//     let username="jesre"
//     console.log(this.username)
// }
// chai()

const chai =()=>{
       let username="jesre"
       console.log(this)

}
chai()



