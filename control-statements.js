/**
 * Decision Making statements
 * If- else 
 * else if 
 * switch case 
 * loopß
 */
let staticIP ="192.168.10.0"
let clientIP="192.168.10.0"

 if(staticIP===clientIP){
    console.log("Accedd allowed")
 }else{
    console.log("Access Denied")
 }

 const day ="sunday"
 if (day === "sunday"|| day ==="saturday"){
    console.log("Holiday")
 }
  else if (day === "Friday"){
    console.log("Weekend")
 }else {
    console.log("weekdays")
 }

 const days =new Date().getDay()
 switch(days){
    case 0 :
        console.log("Sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;   
    

 } 

 