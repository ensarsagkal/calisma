export const renderCoins=(coin)=>{
    // console.log(coin);
    const {price,name,iconUrl,change,symbol,rank}= coin
    const coinsUl = document.querySelector("main .coins")
    const newCoinLi = document.createElement("li")
    newCoinLi.innerHTML=`
    <div class="remove-icon">
        <i class="fas fa-window-close"></i>
    
    </div>

    
    
    `
    coinsUl.append(newCoinLi)
}