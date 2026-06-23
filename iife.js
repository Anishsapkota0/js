// Immeddiately Invoked Function Expression

(function chai(){
    // named IIfE
    console.log("DB connected")
})();

(()=>{
    console.log("Db connected 2")
})();

((name)=>{
console.log(`MY name is ${name}`)
})("Anish Sapkota")


