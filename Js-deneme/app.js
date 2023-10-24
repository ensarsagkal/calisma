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

// // ! day and season
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
// }else if((month==1)||(month==12 && day>=21)||(month==2 && day<=20)){
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
// *=====================FOR LOOPS=======================================
// *========================================================================

// for(let i = 0; i<=17; i++){
//     console.log(i);
// }
// for(let i = 1; i<=17; ++i){
//     console.log(i);
// }

// for(let i=0; i<=10; i++){
//     console.log(`${i}*${i} = ${i*i}`);
// }
// for(let num=2;num<=1000; num+=num){
//     console.log(`${1000/num}`);
// }

// const ulkeler = ["Finland","Sweden","Denmark","Norway","Canada"]
// const yeniListe = []

// for(let i=0; i<ulkeler.length; i++){
//     yeniListe.push(ulkeler[i].toUpperCase())
// }
// console.log(yeniListe);
// console.log(ulkeler.length);
// console.log(ulkeler[4]);


// const names=["Ahmet","MEHMET","aLi","SEda", "ceMal"]

// let isim="ensarsagkal"
// console.log(isim.length);
// console.log(isim[3]);
// let nameArr=[]
// let firstName= prompt("enter first name")
// let secondName=prompt("enter second name")
// let thirdName= prompt("enter third name")
// let fourthName= prompt("enter fourth name")

// nameArr[0]=firstName
// nameArr[1]=secondName
// nameArr[2]=thirdName
// nameArr[3]=fourthName
// console.log(nameArr);

// const numbers = [10,11,12,13,14,15]
// let sum = 0
// for(let i=0; i<numbers.length; i++){
    
//     // console.log(sum);
//     if(numbers[i]%2==0){
//         sum+=numbers[i]
//     }
// }
// console.log(sum);


// const oddOrEven=[10,11,12,13,14,15,16,17,18,19,20,21]
// let even=[]
// let odd=[]
// let sumEven = 0
// let sumOdd =0
// let sum =0
// for(let i=0;i<oddOrEven.length;i++){
//     if(oddOrEven[i]%2==0){
//        even.push(oddOrEven[i])
//        sum+=even
//        console.log(sum);
//     }else{odd.push(oddOrEven[i])}
// }
// console.log(even);
// console.log(odd);


// const oddOrEven=[10,11,12,13,14,15,16,17,18,19,20,21]
// let even=[]
// let odd=[]
// let sum =0
// let sumo =0
// for(let i=0;i<oddOrEven.length;i++){
//     if(oddOrEven[i]%2==0){
//        even.push(oddOrEven[i])
//        sum = sum + oddOrEven[i]
       
//     }else{odd.push(oddOrEven[i])
//         sumo = sum + oddOrEven[i]
//     }
// }
// console.log(`cift sayılar: ${even},
// bu sayıların toplamı: ${sum}`);
// console.log(`tek sayılar: ${odd},
// bu sayıların toplamı: ${sumo}`);
/* -------------------------------------------------------------------------- */
/!*                                FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// function printfullName(){
//     let firstName = "Ensar"
//     let lastName = "Sagkal"
//     let space =" "
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(printfullName());


// function vki(height,weight){
//     let index= weight/(height*height)
//     return index
// }

// console.log(vki(1.72,80));

// function vki(){
//     let height =1.60
//     let weight =85
//     let index = Math.round(weight/ (height**2))
   
//    return index
// }



// if (vki()>=30){
//     console.log("overweighted");
// }else if(vki()<30){
//     console.log("normal");
// }

// function areaOfCircle(r){
//     let area= +(Math.PI*r*r).toFixed(2)
//     return area
// }
// console.log(areaOfCircle(10));
// console.log(areaOfCircle(20));

// function square(number){
//     let result = number**2
//     return result
// }
// console.log(square(prompt("enter a number")));

// function sumTwoNumbers(num1,num2){
//     let sum= num1 +num2
//     return sum
// }

// console.log(sumTwoNumbers(+prompt("first"),+prompt("second")));
// function printfullName(firstName,secondName){
//     return `${firstName} ${secondName}`
// }
// console.log(printfullName("ensar","sagkal"));


// function sumArrayValues(arr){
//     let sum = 0
//     for(let i= 0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum
// }

// const numbers=[10,15,20,25,30]
// console.log(sumArrayValues(numbers));



// const areaOfCircle = (radius) => {
//     let area = Math.PI*radius*radius
//     return area
// }
// console.log(areaOfCircle(10));

// !arrow function

// const areaOfCircle =(r)=>Math.PI*r*r

// const yariCap = Number(prompt("alanını istediğiniz dairenin yarıçapını giriniz : "))

// console.log(`dairenin alanı ${areaOfCircle(yariCap)}`);

// *-------------------------------------------
// const age = (yas) => 2023 - yas

// const personAge = Number(prompt("enter your date of birth : "))

// console.log(`your age is ${age(personAge)}`);



// ! HESAP MAKİNESİ FONKSİYONLARI

// function topla(num1,num2){
//     const sum = num1 +num2
//     return sum
// }
// function cikar(num1,num2){
//     const cikarma = num1-num2
//     return cikarma
// }
// function carp(num1,num2){
//     const mult = num1*num2
//     return mult
// }
// function bol(num1,num2){
//     const divide =num1/num2
//     return divide
// }
// console.log(topla(5,10),cikar(78,65),carp(9,8),bol(12,3));




// function hesapMakinesi(num1,num2){
//     const toplam = num1+num2
//     const cikarma = num1 - num2
//     const carpim = num1*num2
//     const bolum = num1/num2
//     return `toplam : ${toplam} ---- cıkarma :${cikarma} ----- çarpım : ${carpim} ------ bölüm : ${bolum}`
// }

// console.log(hesapMakinesi(9,3));



// const topla = function(num1,num2){
//     return num1+num2
// }

// let sayi1= Number(prompt("ilk sayiyi giriniz: "))
// let sayi2= Number(prompt("ikinci sayiyi giriniz: "))
//  console.log(`${sayi1}+${sayi2}'nin toplamı : ${topla(sayi1,sayi2)} `);

// ! true false kontrolü ile ternary
// const divideFour = function(num){
//     return num%4 ? "4'e bölünmez" :"bölünür"
// }

// console.log(divideFour(19));


// const yasHesaplama = (dogumTarihi) => new Date().getFullYear() - dogumTarihi

// const yas = Number(prompt("doğum yılınızı giriniz :"))

// console.log(`${yasHesaplama(yas)}  yaşındasınız`);


// const divideFour = (num)=>{
//     return num%4 ? "4'e bölünmez" :"bölünür"
// }

// console.log(divideFour(19));

// const meyveDilimle = (meyveSayisi) => meyveSayisi*4





// function reverseWordsWithoutArray(sentence) {
//     let reversedSentence = "";
//     let word = "";
//     for (let i = sentence.length - 1; i >= 0; i--) {
//       if (sentence[i] === " " || i === 0) {
//         if (i === 0) {
//           word += sentence[i];
//         }
       
//         }
//       }
    
//     return word;
//   }
//   const sentence = "Hello World!";
//   console.log(reverseWordsWithoutArray(sentence));


// function reversedWordsWithoutArray(inputSentence) {
//     let reversedSentence = "";
//     let currentWord = "";
//     for (let i = 0; i < inputSentence.length; i++) {
//       if (inputSentence[i] === " ") {
//         reversedSentence = currentWord + " " + reversedSentence;
//         currentWord = "";
//       } else {
//         currentWord += inputSentence[i];
//       }
//     }
//     reversedSentence = currentWord + " " + reversedSentence;
//     return reversedSentence;
//   }
//   const enteredSentence = "Hello World!";
//   const reversed = reversedWordsWithoutArray(enteredSentence);
//   console.log(reversed);


// !BMI program
// const bmi = (w,h)=>{
//     let index = w / (h**2)
//     index =Number(index.toFixed(2))
//     if(index<=18.5){
//         return `Your BMI is : ${index} and you are Underweight`
//     }else if(index<=24.9){
//         return `Your BMI is : ${index} and you are Normal weight`
//     }else if(index<=29.9){
//         return `Your BMI is : ${index} and you are Overweight`
//     }else if(index>=30){
//         return `Your BMI is : ${index} and you are Obese`
//     }else{
//         return `error!`
//     }
// }


// const weight = Number(prompt("enter your weight(kg)  :"))
// const height = Number(prompt("Enter your height(m)  :"))

// console.log(bmi(weight,height));

// !reversed array
// reverseArray(['A', 'B', 'C'])

// const reversedArray=(arr)=>{
//     let newArray=[]
//     for(i =arr.length-1; i>=0;i--){
//         newArray.push(arr[i])
//     }
//     return newArray
// }

// console.log(reversedArray(['A', 'B', 'C','5',5,69,1993]));


// !swap values

// const swapValues = (num1,num2)=>{
//     let num3 = num1
//     num1=num2
//     num2=num3
//     return `${num1} ${num2}`
// }

// console.log(swapValues(45,15));






// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789><.£#$!';
// function generateRandomCode(hane){
    
   
//     let result = ""
//     let charactersLength = characters.length;
//     for ( let i = 0; i < hane ; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result


// }
// const hane = Number(prompt("kaç haneli şifre istersin?"))
// // const kere = Number(prompt("kaç farklı şifre istersin?"))

// console.log(generateRandomCode(hane));




// // ! tersten yazdırma

// const reversedWitoutArray2 = (value) => {
//     let reversedSentence=""
//     let reversedWord =""

//     for(let i =value.length -1;i>=0;i-- ){
//         if(i===0 || i===" "){
//            reversedWord +=value[i] 
//         }else{
//             reversedSentence+=value[i]
//         }
//     }for(j=reversedWord.length-1; j>=0;j--){
//         reversedSentence+=reversedWord[j]
//     }
//     return reversedSentence
// }
// console.log(reversedWitoutArray2("hello world! 2023"));


// const reversedWitoutArray2 = (value) => {
//     let reversedSentence=""
    

//     for(let i =value.length -1;i>=0;i-- ){
        
        
        
//             reversedSentence+=value[i]
//     }
    
//     return reversedSentence
// }
// console.log(reversedWitoutArray2("hello world! 2023"));


// function reversedWordsWithoutArray(inputSentence) {
//     let reversedSentence = "";
//     let currentWord = "";
//     for (let i = 0; i < inputSentence.length; i++) {
//       if (inputSentence[i] === " ") {
//         reversedSentence = currentWord + " " + reversedSentence;
//         currentWord = "";
//       } else {
//         currentWord += inputSentence[i];
//       }
//     }
//     reversedSentence = currentWord + " " + reversedSentence;
//     return reversedSentence;
//   }
//   const enteredSentence = "Hello JS World!";
//   const reversed = reversedWordsWithoutArray(enteredSentence);
//   console.log(reversed);



// const date= new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
// let hours = date.getHours();
// let minutes = date.getMinutes();


// let showDateTime = `${day}/${month}/${year}  ${hours}:${minutes}`;
// console.log(showDateTime); 


// const addItem = box =>{
//     const newColour = []
//     for(const element of box){
//         newColour.push(element)
//     }
//     return newColour
// }

// const colors = prompt("renk giriniz")
// console.log(addItem(colors));

// function generateColors(type) {
//     if (type === "hex") {
//       return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     } else if (type === "rgb") {
//       const randomValue = () => Math.floor(Math.random() * 256);
//       return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
//     }
//   }
  
//   const hexColor = generateColors("hex");
//   console.log("Rastgele Hex Renk:", hexColor);
  
//   const rgbColor = generateColors("rgb");
//   console.log("Rastgele RGB Renk:", rgbColor);


// const randomValue = () => {
//    let color = Math.floor(Math.random() * 256)
//    let color2 = Math.floor(Math.random() * 256)
//    let color3 = Math.floor(Math.random() * 256)

//     return `rgb =${color}, ${color2} ,${color3}` 

// };
    
    
//    console.log(randomValue());

// !STRING METHODS

let str ="30 Days Of JavaScript"
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.toLowerCase());

// let newstr = "30 Days Of ";
// console.log(str.substr(newstr.length, 4));
// console.log(str.substring(11, 15));
// console.log(str.substring(3, 22));
// console.log(str.includes("script"));
// // console.log(str.split("J", 1));
// console.log(str.split(" "));
// console.log("30 Days Of Javascript".split(" "));
// console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));
// console.log(str.replace('Javascript','python'));
// console.log(str.charAt(15));
// console.log(str.charCodeAt(11));
// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf("a"));
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"));
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"));
// console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
// console.log(str.trim());

// const str = '30 Days Of 20 JAvaScript'

// console.log(str.startsWith('30'));
// console.log(str.endsWith('Script'));
// console.log(str.indexOf('a',));
// console.log(str.length);

// console.log('30 Days of'.concat(' JavaScript'));

// console.log(str.repeat(3));
//10.soru
// let text = "JavaScript"
// leng = text.length
// console.log(leng);

// let randomSayi = Math.floor(Math.random()*leng)
// console.log(randomSayi);
// console.log(text[randomSayi]);

//!--------------- Level-3 -------------------

// let tex = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// sayi = tex.match(/love/gi)
// console.log(sayi.length);
// console.log(tex.match(/love/gi).length);


// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// newSentence = sentence.replace(/%/gi,"").replace(/@/gi,"").replace(/#/gi,"").replace(/&/gi,"").replace(/\$/gi,"");

// console.log(sentence.replace(/[^a-zA-Z0-9\s]/gi, ""));
// const cleanedSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, '')

// console.log(newSentence.split(" "));

// *boolean----
// let firstName = "Ensar"
// let  lastName = "Sagkal"
// let age = 30
// let isMarried = false
// let year = new Date().getFullYear()

// console.log(typeof year, typeof firstName, typeof  age);

// console.log("10"===10);

// ! =========================ARRAYS=======================
// const fruits = ['banana', 'orange', 'mango', 'lemon']

// console.log(fruits[0][2]);
// const arr = Array()
// const arr1 = new Array()
// const arr2 = [] 

// console.log(typeof arr);
// console.log(typeof arr1);
// console.log(typeof arr2);

// console.log(arr);

// const numbers = [5,6,7,2.4,5]
// console.log(numbers);
// console.log(numbers.length);
// console.clear()

// const arr5 = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ]

// console.log(object);

// console.log(arr5);
// console.log(arr5.length);

// let js = 'Java script'

// console.log(js.split('a',2));

// const fruits = ['banana', 'orange', 'mango', 'lemon']

// console.log(fruits[0][0],fruits[2]);
// console.log(fruits[2]);
// console.log(fruits[fruits.length-1]);
// console.log(fruits.length);

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   console.log(webTechs);
// console.clear()

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
// console.log(countries);
//   countries[14] = 'Turkey'
//   console.log(countries);

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList  = [7,8,9]

// const fourtList = firstList.concat(secondList,thirdList)

// console.log(fourtList);

// const numbers = [1, 2, 3, 4, 5,'banana']

// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf('apple'));
// console.log(numbers.indexOf('banana'));

// const fruits = ['banana', 'orange', 'mango', 'lemon','apple']

// let index = fruits.indexOf(prompt('enter a fruits').toLowerCase())

// index === -1 ? console.log('not exist') : console.log('index of fruits');


//! Array olusturma metotlari - 3 adet

// const arr = Array()
// const arr1 = new Array()
// const arr2 = []

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// console.log(typeof arr);
// console.log(typeof arr1);
// console.log(typeof arr2);


// const numbers = [5,6,7,2.4,5]
// console.log(numbers);
// console.log(numbers.length);


// const arr4 = ['Hakan',30,true,{ country: 'Finland', city: 'Helsinki' },{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } ]

// console.log(arr4);
// console.log(arr4.length);


// const js = 'Java script'
// console.log(js.split(' '));
// console.log(js.split('a',2));


// const fruits = ['banana', 'orange', 'mango', 'lemon']

// console.log(fruits[0]);
// console.log(fruits[0][2]);
// console.log(fruits[2]);
// //? last index
// console.log(fruits[fruits.length-1]);

// //* Ornek

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   console.log(countries);
//   countries[1] = "Turkey"
//   console.log(countries);

//   countries[11] = "Turkey"
//   console.log(countries);

//   countries[15]= 'Turkey'
//   console.log(countries);


//   const arr5 = Array(5).fill('3')
//   console.log(arr5);


// //?    CONCAT
// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdlist = [7,8,9]

// const fourtlist = firstList.concat(secondList,thirdlist)
// console.log(fourtlist);


// //?   indexOf()
// const number = [1, 2, 3, 4, 5, 'banana']

// console.log(number.indexOf(2));
// console.log(number.indexOf(6));
// console.log(number.indexOf('banana'));
// console.log(number.indexOf('apple'));


// const fruit = ['banana', 'orange', 'mango', 'lemon']

// let index = fruit.indexOf(prompt("enter a ftuit").toLowerCase())

// index === -1 ? console.log("not exist") : console.log("index of fruit");


// const fruit = ['banana','apple', 'orange','banana','mango', 'lemon', 'apple','banana']

// console.log(fruit.lastIndexOf('banana'));
// console.log(fruit.lastIndexOf('banana',6));


// console.log(fruit.includes('apple'));
// console.log(fruit.includes('uzum'));

// console.log(Array.isArray(fruit));

// //* Array mi degil mi
// const ad = 'Hakan'
// console.log(Array.isArray(ad));

// console.log(fruit.toString());


// //? Join() Metotu --- immutable dir. 


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]


// console.log(webTechs.join(' - '));
// console.log(webTechs);


// //? slice() Metotu --- immutable dir. 

// console.log(webTechs.slice(2,4));
// console.log(webTechs);
// console.log(webTechs.slice(webTechs.length-1));

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1]);
// for(let i=0; i<= itCompanies.length-1; i++){
//     console.log(itCompanies[i]);
//  }

// console.log(`${itCompanies.join(" ")} are big it companies`);
// let ocounter= 0
// for(let i=0 ; i<itCompanies.length; i++){
//     for(let j=0; j<itCompanies[i].length;j++){
//       if(itCompanies[i][j]==="o"){
//         ocounter+=1
        
//       }  
//     }
//     if()
// }
// console.log(ocounter);

// let filterCompanies = []

//  for(let i=0;i<itCompanies.length;i++){
//     let len = itCompanies[0].match(/o/gi).length
//     if(len >=1){
//         filterCompanies.push(itCompanies[i])
//     }
//  }
//  console.log(filterCompanies);

// const companies = [
//     { name: 'Google' },
//     { name: 'Microsoft' },
//     { name: 'Facebook' },
//     { name: 'Apple' },
//     { name: 'Oracle' },
//   ];
//   const filteredCompanies = [];
//   for (let i = 0; i < companies.length; i++) {
//     const company = companies[i];
//     const companyName = company.name.toLowerCase(); // Convert to lowercase for case-insensitive check
//     let oCount = 0;
//     for (let j = 0; j < companyName.length; j++) {
//       if (companyName[j] === 'o') {
//         oCount++;
//         if (oCount > 1) {
//           break; // More than one 'o' found, skip this company
//         }
//       }
//     }
//     if (oCount <= 1) {
//       filteredCompanies.push(company);
//     }
//   }
//   console.log(filteredCompanies);

// let filterCompanies = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   let len = (itCompanies[i].match(/o/gi) || []).length;
//   if (len > 1) {
//     filterCompanies.push(itCompanies[i]);
//   }
// }
// console.log(filterCompanies);

// console.log(itCompanies.sort());

// console.log(itCompanies.reverse());,

// console.log(itCompanies.slice(0,3));
// console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

// const companis = ["Facebook", "Google", "Microsoft", "Apple", "IBM","Oracle","Amazon"]
// for(i=0; i<= companis.length ; i++){

// if((companis[i].match(/o/gi)).length>=2){
//     console.log(companis[i]);
// }
// }

// itCompanies.length %2 ? console.log(itCompanies[(itCompanies.length-1)/2]) :console.log(itCompanies[
//     itCompanies.length/2
// ]);
// ;

// console.log(itCompanies.shift());
// console.log(itCompanies);
// console.log(itCompanies.splice((itCompanies.length-1)/2,1));
// console.log(itCompanies);

// console.log(itCompanies.pop());
// console.log(itCompanies);



// itCompanies.fill()
// console.log(itCompanies);

// itCompanies.length %2 ? console.log(itCompanies[(itCompanies.length-1)/2]) :console.log(itCompanies[
//     itCompanies.length/2
// ]);
// ;
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// shoppingCart.indexOf("Meat") === -1 ? shoppingCart.unshift("Meat") : "";
// console.log(shoppingCart);
// shoppingCart.indexOf("Sugar") === -1 ? shoppingCart.push("Sugar") : "";
// console.log(shoppingCart);
// confirm("You're allergic to honey") ? shoppingCart.splice(4, 1) : "";
// console.log(shoppingCart);

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//     countries.includes("Ethiopia") ? console.log(countries[countries.indexOf("Ethiopia")].toUpperCase()) : countries.push("Ethiopia")
//     console.log(countries);
//     countries.includes("Ethiopia") ? console.log(countries.splice(countries.indexOf("Ethiopia"),1,"ETHİOPİA")) : countries.push("Ethiopia")
//     console.log(countries);

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//   ];
  
//   webTechs.includes("Sass")
//     ? console.log("Sass is a CSS preprocess")
//     : webTechs.splice(webTechs.indexOf("JavaScript"), 0, "Sass") &&
//       console.log(webTechs);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack= frontEnd.concat(backEnd)
// console.log(fullStack)


//   compare("mary", "arms")
//   console.log(compare("mary", "arms"));
// let name1= "mary"
// let name2 = "arms"
// let y =name1.split("").sort()
// let z =name2.split("").sort()
// console.log(y ,z);

// let a = "ahmet Ali"
// let b = cleanAndNormalize(a)
// console.log(b)
// const unique = (arr) =>{
//     let newUniqueArr =[]
//     for(const item of arr){
//         if(!newUniqueArr.includes(item)){
//             newUniqueArr.push(item)
//         }
//     }
//     return newUniqueArr
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// console.log(unique(arrayWithDuplicates));

// const unique = (arr) =>{
//     let newUniqueArr =[]
//     for(const item of arr){
//         if(newUniqueArr.includes(item)){
            
//         }else{
//             newUniqueArr.push(item)
//         }
//     }
//     return newUniqueArr
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// console.log(unique(arrayWithDuplicates));

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// // const result = findIntersection(array1, array2);
// // console.log(result); // [3, 4, 5]

// const inter = (arr1,arr2)=>{
//     const interArr=[]
//     for(let i =0;i< arr1.length; i++){
//         for(let j =0; j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 interArr.push(arr1[i])
//                 break
//             }
//         }
//     }
//     return interArr
// }

// console.log(inter(array1,array2));


// const cleanAndNormalize  = (str) => {
//     let cleanedStr = ""

//     for(let i=0; i<str.length;i++){
//         const char = str[i].toLowerCase();

//         if(char !== " " && char !== "\n" && char !=="\t"){
//             cleanedStr +=char;
//         }
//     }
//     return cleanedStr
// }

// //? -------------------------------------

// const sortString =  (str) =>{
//     return str.split("").sort().join("")
// }

// //?---------------------------------------

// const areAnagrams=(str1, str2) =>{
//     const cleanedStr1 = cleanAndNormalize(str1)
//     const cleanedStr2 = cleanAndNormalize(str2)

//     if(cleanedStr1.length !== cleanedStr2.length){
//         return false;
//     }

//     const sortedStr1 = sortString(cleanedStr1)
//     const sortedStr2 = sortString(cleanedStr2)

//     return sortedStr1 === sortedStr2

// }


// console.log(areAnagrams("listen", "silent")); // Should print true
// console.log(areAnagrams("hello", "world")); // Should print false
// console.log(areAnagrams("The Morse Code", "Here come dots"));  // Should print true
// console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
// console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true
// !===============================HIGHER ORDER=================================

// const higherOrder = n =>{
//     const doSomething = m=>{
//         const doWhatEver = t=>{
//             return 2*n +3*m+t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10));

// const numbers=[1,2,3,4,5]
// const sumArr = arr=>{
//     let sum =0
//     const callback = function(element){
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum
// }
// console.log(sumArr(numbers));

// const numbers=[1,2,3,4,5]
// const sumArr = arr=>{
//     let sum =0
//     arr.forEach(function(element){
//         sum+=element
//     })
//     return sum 
// }    
// console.log(sumArr(numbers));

// const letters = ['A', 'B', 'C', ,'E'];

// letters.forEach((e)=>{
//    let arr=[]
//    arr.push(letters.slice(1,e))
//    console.log(arr);
// })

// const cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'Chicago', population: 2695598},
//     {name: 'New York', population: 8175133},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
//   ];

//   const smallestCities = cities.filter((city)=>{
//    return city.population<3000000
   
//   })
//   console.log(smallestCities);


//   const rounded = cities.map((city)=>{
//     city.population=(city.population/1000000).toFixed(2)+"M"
//     return city
//   })
//   console.log(rounded);
// const adlar = ["ali", "ahmet", "ayşe"]
// const soyAdlar=["ağaç","güzel","arı"]

// const birles= (arr1,arr2)=>{
//     let nameSurname=[]
//     for(let i in arr1){
//         nameSurname[i]=`${arr1[i]} ${arr2[i]}`
//     }
//     return nameSurname
// }
// console.log(birles(adlar,soyAdlar));
// const arr=[-5,24,-13,7]
// let newArr=[]
// arr.forEach((num)=>{newArr.push(num*5)})
// console.log(newArr);

// const arr=[-5,24,-13,7]
// let newArr=[]
// arr.forEach((num,index)=>{newArr[index]=(num*5)})
// console.log(newArr);

// const arr=[-5,24,-13,70]
// const newArr = arr.map((num)=>num*5)
// console.log(newArr);

// const adlar = ["ali", "ahmet", "ayşe","faik", "ensar","erol"]
// const newNames = adlar.map((n)=>n.toUpperCase())
// console.log(newNames);

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',"England"]
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]


// countries.forEach((country)=>console.log(country))
// names.forEach((name)=>console.log(name))
// numbers.forEach((number)=>console.log(number))
// const newCountries = countries.map((country)=>country.toUpperCase())
// console.log(newCountries);
// const lenghtCountries = countries.map((country)=>country.length)
// console.log(lenghtCountries);
// const newNumbers = numbers.map((number)=>number**2)
// console.log(newNumbers);
// console.log(names.map((name)=>name.toUpperCase()))
// const prices=products.map((product)=>product);
// console.log(prices);
// const landCountries = countries.filter((country)=>country.toLowerCase().includes("land"))
// console.log(landCountries);
// const sixChar = countries.filter((country)=>country.length===6)
// console.log(sixChar);
// const sixMoreChar = countries.filter((country)=>country.length>=6)
// console.log(sixMoreChar);
// const startE = countries.filter((country)=>country[0]==="E")
// console.log(startE);
// // const valuesOnly = products.filter((product)=>product.price)
// // console.log(valuesOnly);
// const arr9=["a","b",5,9,7]
// const getStringList = (arr)=>{
//     return arr.filter((str)=> typeof str=== "string")

// }
// console.log(getStringList(arr9));

// const sumNumbers = numbers.reduce((sum,num)=> sum+=num,0)
// console.log(sumNumbers);
// const newSentence= countries.reduce((sum,country)=>`Estonia ${sum+=country} are Europian countries`)
// console.log(newSentence);
// const isimler = ["Alice", "Bob", "Charlie", "David", "Eve"]
// const newİS =isimler.filter((isim)=>isim.length>=5)
// console.log(newİS);
// const team = [
//     { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
//     { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//     { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
//   ]

//  const names = team.map((p)=>p.name)
//  console.log(names);

// const sumOfAges = team.reduce((s,p)=>s+p.age,0)
// console.log(sumOfAges);

// const lowerSurname = team.map((p)=>{
//     return p.surname.toUpperCase( )
// })
// console.log(lowerSurname);

// const newObj = team.map((p)=>{
//     return {fulname:`${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,ageplus : `${p.age+5}` }
// })
// console.log(newObj);

const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.6 },
    { title: '1984', author: 'George Orwell', rating: 4.0 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.7 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.5 },
    { title: 'Moby-Dick', author: 'Herman Melville', rating: 4.1 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.8 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.3 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling',
   rating: 4.7 },
    { title: 'Brave New World', author: 'Aldous Huxley', rating: 4.0 },
    { title: 'The Shining', author: 'Stephen King', rating: 4.2 },
    { title: 'The Da Vinci Code', author: 'Dan Brown', rating: 3.9 },
    { title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.4 },
    { title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.9 },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.5 },
    { title: 'The Odyssey', author: 'Homer', rating: 4.6 },
    { title: 'Frankenstein', author: 'Mary Shelley', rating: 4.2 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', rating: 4.1 },
    { title: 'The Road', author: 'Cormac McCarthy', rating: 4.3 },
    { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams',rating: 4.7 },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', rating: 4.8 },]


    const filteredBooks= books.filter((b)=>b.rating>=4.5)
    // console.log(filteredBooks);


    const longText =`There are many variations of passages of Lorem Ipsum available, but the majority
    have suffered alteration in some form, by injected humour, or randomised words
    which don't look even slightly believable. If you are going to use a passage of
    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
    predefined chunks as necessary, making this the first true generator on the
    Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
    model sentence structures, to generate Lorem Ipsum which looks reasonable. The
    generated Lorem Ipsum is therefore always free from repetition, injected humour, or
    non-characteristic words etc.`
    const newLongTextArr = longText.split(" ")
    // console.log(newLongTextArr);
//    const x =newLongTextArr.map((i)=>i)
// for(let i of newLongTextArr){
//    console.log(i.splice(0,1,i[0].toUpperCase()));
// }
   


const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
   ];

const filteredproducts = products.map(function(p){
    return{category:products.filter((p)=>p.category==="Electronics"), average:products.reduce((acc,v)=>(acc+v)/v)}
})
console.log(filteredproducts);

