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
// let number1 = parseInt(prompt("enter a number1"))
// let number2 = parseInt(prompt("enter a number2"))
// let result
// islem = prompt("bir islem seciniz")
// if(islem == "+"){
//    result = number1 + number2
//    console.log(`${result}`)
// }else if(islem== "*"){
//     result= number1* number2
//     console.log(`${result}`)
// }else if(islem == "-"){
//     result= number1 - number2
//     console.log(`${result}`)
// }else if(islem == "/" ){
//     result= number1 / number2
//     console.log(`${result}`)
// }
// else{
//     console.log("hatalı bir giris yaptınız");
// }

// let ay =Number(prompt('Ay:1-12'))

// switch (ay) {
//     case 1:
//         ay='ocak'
//         break;

//     case 2:
//         ay='subat'
//         break;
//     case 3:
//         ay='mart'
//         break;
//     case 4:
//         ay='nisan'
//         break;
//     case 5:
//         ay='mayıs'
//         break;
//     case 6:
//         ay='haziran'
//         break;
//     case 7:
//         ay='temmuz'
//         break;
//     case 8:
//         ay='agustos'
//         break;
//     case 9:
//         ay='eylul'
//         break;
//     case 10:
//         ay='ekim'
//         break;
//     case 11:
//         ay='kasım'
//         break;
//     case 12:
//         ay='aralık'
//         break;

//     default:
//         ay = console.log('yanlıs');
//         break;
// }

// console.log(ay);

// let gun =prompt('gun:pazartesi-pazar')
//  gun = gun.toLowerCase()

// switch (gun) {
//     case 'pazartesi':
//         gun = 'inclass'

//         break;

//     case 'sali':
//         gun = 'inclass'

//         break;
//     case 'carsamba':
//         gun = 'inclass'

//         break;
//     case 'persembe':
//         gun = 'inclass'

//         break;
//     case 'cuma':
//         gun = 'teamwork'

//         break;
//     case 'cumartesi':
//         gun = 'inclass + workshop'

//         break;
//     case 'pazar':
//         gun = 'self-study'

//         break;

//     default:
//         console.log('yanlıs girdiniz');
//         break;
// }

// console.log(gun);

// let yourNote = prompt("enter your note")
// yourNote=parseInt(yourNote)
// let degree=yourNote>=50? "passed": "fail"
// console.log(degree);

// yourNote = parseInt(prompt("enter your note:"))
// const gecmeDurumu = yourNote<40 ? "Kaldi" : (yourNote<50 ? "sartli gecti" : "gecti")
// console.log(gecmeDurumu);

// ! maas

// let salary= parseInt(prompt("enter your salary: "))
// let minimumWage=11402

// let newSalary =salary<=minimumWage ? `Your new salary is ${salary+(salary/2)}` : `Your new salary is ${salary+(salary/10)}`
// console.log(newSalary);

// let income = parseInt(prompt("enter your income : "))
// let expense = parseInt(prompt("enter your expense :"))
// let minimumWage=11402
// let credit = ((income - expense)>=minimumWage)? "credit avaible" : "sorry"
// console.log(credit);

// let grade = Number(prompt("Enter your grade: "))
// let sonuc=""

// if(grade>=0 && grade<=100){
//     if(grade<=25){
//         sonuc="FF"
//     }else if(grade<=45){
//         sonuc="DD"
//     }else if(grade<=65){
//         sonuc="CC"
//     }else if(grade<=75){
//         sonuc="BB"
//     }else if(grade<=90){
//         sonuc="BA"
//     }else{
//         sonuc="AA"
//     }

// }else{sonuc="hatali giris yaptiniz"}
// console.log(sonuc);

// !=================================================================

// const grade = 20
// let sonuc = ""

// if (grade < 0 || grade > 100) {
//   console.log("Hatali not girisi")
// } else if (grade < 40) {
//   sonuc = "FF"
// } else if (grade < 55) {
//   sonuc = "DD"
// } else if (grade < 70) {
//   sonuc = "CC"
// } else if (grade < 85) {
//   sonuc = "BB"
// } else {
//   sonuc = "AA"
// }
// //! Kısa hali
// if (sonuc) {
//   console.log("SONUC:", sonuc)
// }

// //? uzun hali
// // if (Boolean(sonuc) == true) {
// //   console.log("SONUC:", sonuc)
// // }

// //? ODEV: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.,

// let month = prompt("ay ismi giriniz")
// month = month.toLowerCase()
// switch (month) {
//     case "ocak":
//         month = 1
//         break;
//     case "subat":
//         month = 2
//         break;
//     case "mart":
//         month = 3
//         break;
//     case "nisan":
//         month = 4
//         break;
//     case "mayıs":
//         month = 5
//         break;
//     case "haziran":
//         month = 6
//         break;
//     case "temmuz":
//         month = 7
//         break;
//     case "agustos":
//         month = 8
//         break;
//     case "eylül":
//         month = 9
//         break;
//     case "ekim":
//         month = 10
//         break;
//     case "kasım":
//         month = 11
//         break;
//     case "aralık":
//         month = 12
//         break;
//     default:
//     month = "hatali giriş yaptınız"
//         break;
// }
// console.log(month);

// let num1= Number(prompt("enter a first number: "))
// let num2=Number(prompt("enter a second number: "))
// let num3=Number(prompt("enter a third number: "))

// console.log(`girilen sayilarin toplami: ${toplam}
// carpimi ${carpim}
// maksimum deger : ${max}
// minimum deger : ${min}`);

// const num1 = Number(prompt('enter a first number'))
// const num2 = Number(prompt('enter a second number'))
// const num3 = Number(prompt('enter a third number'))

// let toplam = num1 + num2 + num3
// // console.log(toplam);
// let carpim = num1 * num2 * num3
// // console.log(carpim);

// let max = Math.max(num1,num2,num3)
// // console.log(max);

// let min = Math.min(num1,num2,num3)
// // console.log(min);

// console.log(`girilen sayilarin toplami: ${toplam}
// carpimi ${carpim}
// maksimum deger : ${max}
// minimum deger : ${min}`);

// let number = Number(prompt("Sayi giriniz: "))
// let sonuc = number % 2 == 0 ? "number cifttir"
// : "number tektir"
// console.log(sonuc);

// let whichKind = prompt("fahrenheit to celsius(F) or celsius to fahrenheit(C): ")
// let degree = Number(prompt("please enter a degree: "))
// if(whichKind == "F" ){
//   result = (degree -32) / 1.8
//   console.log(result)
// }else if(whichKind == "C"){
//   result = degree * 1.8 + 32
//   console.log(result)
// }else{
//   console.log("ERROR")
// }

// const number = Math.round(Math.random() * 100);
// console.log(number);
// let guess = +prompt("please enter your guess: ");
// if (guess == number) {
//   console.log("bingo!!");
// } else {
//   console.log("fail!");
// }

// !sayı tahmini coklu

// const number = Math.round(Math.random() * 100);
// console.log(number);
// let guess;
// let counter = 1
// while (counter < 6){
//     guess = +prompt('pls enter the number: ')
//     if(guess == number){
//         console.log("bingo");
//         break
//     }
//     else if (counter == 5){
//         console.log("game over");
//         break
//     }
//     else if (counter == 4){
//         console.log("last chance");
//         if(guess>number){console.log("too high.guess a lower number");
//         }else{console.log("too low.guess a higher number");}
//         counter++
//     }

//     else{
//         console.log("try again");
//         if(guess>number){console.log("too high.guess a lower number");
//         }else{console.log("too low.guess a higher number");}
//         counter++
//     }
// }

// !sayı tahminini mhmmd

// const number = Math.round(Math.random() * 100);
// console.log(number);
// let guess;
// let counter = 0;
// let lastChange = 5;
// while (counter < 5){
//     guess = +prompt("please enter your guess: ");
//     if (guess == number){
//         console.log("Bingo!!");
//         break
//     }
//     counter++
//     if(counter == lastChange){
//         console.log("last chance!!");
//     }
//     if(counter !== lastChange || counter !== lastChange++){
//       console.log("try again");

//     }

// }

// let isRaining = false

// isRaining ? console.log("şemsiyeni al") : console.log("gerek yok");

// // !driver licence

// const age= Number(prompt("Enter your age:"))

//  if(age>=18){console.log("You are old enough to drive.");
// }else{console.log(`You are left with ${18-age} years to drive.`)}

// ! day and season
// let month =prompt("enter a month: 1/12")
// let day= prompt("enter a day: 1/31")

// if(!(month>=1 &&month<=12)|| !(day>=1 && day<=31)){
//     console.log("Error");
// }else{
// let season
// if((month>=3 && month<=5)||(month==2 && day>=21 && day<=29)){
//     season="spring"
// }else if((month>=6 && month<=8)||(month==9 && day<=21)){
//     season="summer"
// }else if((month>=10 && month<=11)||(month==9 && day>=22)||(month==12 && day<=20)){
//     season="fall"
// }else if((month==1)||(month==12 && day>=21)||(month==12 && day<=20)){
//     season="winter"
// }
// console.log(`The season for ${month} / ${day} is ${season}`);
// }

// !leap year
// let year = prompt("enter a year")

// if((year % 4 ==0)&& !(year % 100==0)||(year%400==0)){
//     console.log(`${year} is leap year`);
// }else{console.log(`${year} is not  leap year`);}


// ! hangi ay kaç gün?

// let month = prompt("enter a month");
// month = month.toLocaleLowerCase();
// switch (month) {
//   case "ocak":
//   case "mart":
//   case "mayis":
//   case "temmuz":
//   case "agustos":
//   case "ekim":
//   case "aralik":
//     console.log(`${month} has 31 days`);
//     break;
//   case "subat":
//     console.log(`${month} has 28 days`);
//   case "nisan":
//   case "haziran":
//   case "eylul":
//   case "kasim":
//     console.log(`${month} has 30 days`);
//   default:
//     console.log("hatali giris");
//     break;
// }
