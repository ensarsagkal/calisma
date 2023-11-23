//? projenin style dosyasını ana js kodumuza import ettik.
import "./scss/style.scss"
import { apiRequest } from "./src/apiRequest.js"
const form= document.querySelector("header form")



form.addEventListener("submit",(e)=>{
  e.preventDefault()
  getCoinData()
  e.target.reset()
  
})

const getCoinData=async()=>{
  const input= document.querySelector("header form input").value
  const API_KEY="coinranking1c86887a84d81a68c6114628b1125ec2d803900d6ba62f1e"
  const options = {headers: {'x-access-token': API_KEY,},};

  const url=`https://api.coinranking.com/v2/coins?search=${input}`
  if(!input.trim()){
    alert("Input can not be blank")
  }else{
    apiRequest(input)
  }
 


}