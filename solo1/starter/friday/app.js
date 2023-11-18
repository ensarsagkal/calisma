//?Html ögeleri ile js arasında bağlantı kurduk
const nameSpn = document.querySelector(".name")
const emailSpn = document.querySelector(".email")
const phoneSpn = document.querySelector(".phone")
const pictureSrc = document.querySelector(".pictureSrc")
const API = "https://randomuser.me/api/";

// const getData = ()=>{//?verileri transfer edecek fonksiyonumuzu burada oluşturduk.
//   fetch(API)//?api üzerinden veriler transfer ediyoruz
//     .then((res) =>{//?daha sonra cevabı içerisine parametre olarak verip bu cevap ile ne yapacağımızı tanımlıyoruz
//         if(!res.ok){//?eğer cevap gelmediyse
//             throw new Error("Something went wrong",res.status)//?hata fırlatıyoruz 18.satırda yakalamak için
//         }
//         //?javascript object notation
//         //?javascript obje belirteci
        
//         return res.json()//?ne geldiyse onu obje olarak alıyoruz
//     })
//     .then((data) => showData(data))//?daha sonra aldığımız veri ile ne yapacağımı belirtiyoruz(showData isimli fonksiyona parametre olarak atadık)
//     .catch((err) => console.log(err))//?eğer hata alırsak hata mesajını konsol'a bastırıyoruz
    
// }
// const showData = (data) =>{//?showData fonksiyonunu burada tanımladık parametremizi içine gönderdik
//     const {name , email,phone,picture} = data.results[0] //? verilerimiz obje olarak geldiği için onları destruct ettik ve tek bir eleman bastırmak için 0.index'i aldık
//     console.log(data);
//     console.log(data.results);
//     console.log(data.results[0]);
//     let {title,first,last} = name //? name obje olduğu için name'i destruct ettik
    
//     nameSpn.textContent = title + " " +first + " "+ last//? html'e verilerimi ekledik
//     emailSpn.textContent = email
//     phoneSpn.textContent = phone
//     pictureSrc.src = picture.large

    
// }
// getData()