console.log("Hello_World!");

// ? --------------IF ELSE STATEMENT-------------

// const number = prompt("enter a number:  ")
// if (number>0){
//     console.log(`${number} is a positive number`);
// }
// else if(number==0){
//     console.log(`${number} is zero`);
// }
// else{
// console.log(`${number} is a negative number`);}

// let a= prompt("enter a number: ")
// if(a>0){console.log("number is a positive number");
// } else{if (a==0){console.log("nuber is zero");
// }else{console.log("number is negative");}}

// let age = prompt("enter your age as a number: ")

// if(age>=18){console.log("Adult");
// }else{if(age>=10){console.log("Teenager");
//         }else if(age>=4){console.log("Child");
//         }else if(age>0){console.log("Baby");
//         }else{console.log("Error.Please enter positive number");}}

// ?--------------TERNARY STATEMENT-------------
// const age =prompt("enter your age: ")
// let result=(age >=18) ? "legal" : "not legal yet";
// console.log(`you are ${result}`)

// ?--------------SWICTH CASE STATEMENT-----------

// let day=prompt("_")
// day =parseInt(day)
// let dayName;

// switch(day){
//     case 1:
//         dayName="Monday";
//         break;
//     case 2:
//         dayName= "Tuesday";
//         break;
//     case 3:
//         dayName="Wednesday";
//         break;
//     case 4:
//         dayName="Thursday";
//         break;
//     case 5:
//         dayName ="Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7 :
//         dayName = "Sunday";
//         break;
//     default:
//         dayName="Invalid Day Number"
// }
// console.log(dayName);

// !-----------ELSE IF---------------

// const age = prompt("enter your age : ")
// let output
// if(age>=18){
//     output = "adult"
// }else if(age>=15){
//     output="Teenager"
// }else if(age>=4){
//     output = "Child"
// }else if(age>=0){
//     output = "Baby"
// }else{
//     output = "Invalid input"
// }
// console.log(output);

// const number = prompt("enter a number")

// if(number>0){
//     console.log(`${number} sayisi pozitiftir`);
// }else{
//     if(number==0){
//         console.log(`${number} sayisi sifirdir`);
//     }else{console.log(`${number} sayisi negatiftir`);}
// }

// if(number>=0){
//     if(number==0){console.log("zero");
// }else{console.log("positive");}
// }else{console.log("negative");}

// let numb1 = prompt("enter first number: ");

// let numb2 = prompt("enter second number: ");

// let numb3 = prompt("enter third number: ")
// numb1=parseInt(numb1)
// numb2=parseInt(numb2)
// numb3=parseInt(numb3)

// if (numb1 > numb2) {
//   if (numb1 > numb3) {
//     console.log(`max number is ${numb1}`);
//   } else {
//     console.log(`max number is ${numb3}`);
//   }
// } else if (numb2 > numb3) {
//   console.log(`max number is ${numb2}`);
  
// } else {
//     console.log(`max number is ${numb3}`);
//   }

// const maxNumber =Math.max(numb1,numb2,numb3)
// console.log(`max number is ${maxNumber}`);

// ...hesap makinesi...
let number1 = parseInt(prompt("enter a number1"))
let number2 = parseInt(prompt("enter a number2"))
let result
islem = prompt("bir islem seciniz")
if(islem == "+"){
   result = number1 + number2
   console.log(`${result}`)
}else if(islem== "*"){
    result= number1* number2
    console.log(`${result}`)
}else if(islem == "-"){
    result= number1 - number2
    console.log(`${result}`)
}else if(islem == "/" ){
    result= number1 / number2
    console.log(`${result}`)
}
else{
    console.log("hatalı bir giris yaptınız");
}


let ay =Number(prompt('Ay:1-12'))

switch (ay) {
    case 1:
        ay='ocak'
        break;

    case 2:
        ay='subat'   
        break;
    case 3:
        ay='mart'    
        break;
    case 4:
        ay='nisan'    
        break;
    case 5:
        ay='mayıs'    
        break;
    case 6:
        ay='haziran'    
        break;
    case 7:
        ay='temmuz'    
        break;
    case 8:
        ay='agustos'    
        break;
    case 9:
        ay='eylul'    
        break;
    case 10:
        ay='ekim'    
        break;
    case 11:
        ay='kasım'    
        break;
    case 12:
        ay='aralık'    
        break;

    default:
        ay = console.log('yanlıs');
        break;
}

console.log(ay);

let gun =prompt('gun:pazartesi-pazar')
 gun = gun.toLowerCase()

switch (gun) {
    case 'pazartesi':
        gun = 'inclass'
        
        break;

    case 'sali':
        gun = 'inclass'
        
        break;
    case 'carsamba':
        gun = 'inclass'
        
        break;
    case 'persembe':
        gun = 'inclass'
        
        break;
    case 'cuma':
        gun = 'teamwork'
        
        break;
    case 'cumartesi':
        gun = 'inclass + workshop'
        
        break;
    case 'pazar':
        gun = 'self-study'
        
        break;

    default:
        console.log('yanlıs girdiniz');
        break;
}

console.log(gun);

