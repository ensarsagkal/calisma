const loading = document.getElementById("loading");
const cardDiv= document.getElementById("cardDiv")
const btn= document.querySelector(".btn")
const tarih= document.getElementById("tarih")
setInterval(() => {
    tarih.innerHTML=`${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`    
}, 1000);



const loadingTimeOut = setTimeout(() => {
    loading.style.display = "none";
    fetchCats(); // fetchCats fonksiyonunu burada çağırıyoruz
}, 3000);

const fetchCats= ()=>{
fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res)=>{
    if(!res.ok){
        throw new Error(cardDiv.innerHTML=`<img src="./img/error.gif" />`)
    }
    return res.json()

}).then((data)=>{
    console.log(data);
    catDatas=data
    cardDiv.innerHTML=""
    show(data)
}).catch((error)=>error)

}
let catDatas = []

const show=(images)=>{
    
    images.forEach((img)=>{
        const {url}= img
        cardDiv.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src="${url}" class="w-100 h-100" alt="...">
      </div>
</div>
        `
    })

}

btn.addEventListener("click",()=>{
   fetchCats()
})

