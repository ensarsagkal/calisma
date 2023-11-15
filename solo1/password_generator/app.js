const passArea = document.querySelector(".passArea")

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = []
const symbols = ["!","@","#","$","%","^","&","*","+","~","|","}","{","[","]",":",";","?",">","<",",",".","/","-","="]

 



const generator =()=>{
    let passsword = []
// ?--------- 3 sayı üreten----------
for(let i=0 ; i<3; i++){
    let num = Math.floor(Math.random()*10);
    passsword.push(num)
}

// ?----------2 sembol  üreten---------
for(let i =0; i<2;i++){
    const sym = Math.floor(Math.random()*symbols.length);
    passsword.push(symbols[sym])
}
// ?----------1 büyük harf  üreten---------
const upper = Math.floor(Math.random()*alphabet.length)
passsword.push(alphabet[upper])

// ?----------1 bküçük harf  üreten---------
const lower = Math.floor(Math.random()*alphabet.length)
passsword.push(alphabet[lower].toLowerCase())

// ? ---------geri kalan harfler----------
const lowerCasedLetters = alphabet.map((l)=>l.toLowerCase())
const allLetters= [...alphabet,...lowerCasedLetters]
for(let i=0;i<3;i++){
    const mixed= Math.floor(Math.random()*allLetters.length)
    passsword.push(allLetters[mixed])
}

// ? ---şifre sırasını karıştırma ve string hale getirme----
   const newPass= passsword.sort(()=>0.5-Math.random()).join('');



return newPass

}

const generateBtn =document.querySelector(".btn")

generateBtn.addEventListener("click",()=>{
    passArea.textContent= generator()


})


