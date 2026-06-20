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
    }
};

const user2 = {
    username: "Ram",
    welcomeMessage: user1.welcomeMessage
};
user1.welcomeMessage(); // Anish, welcome
user2.welcomeMessage(); 
