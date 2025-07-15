const plus = document.querySelector("#plus")
const one = document.querySelector("#one")
const menis = document.querySelector("#menis")
const jibar = document.querySelector("#jibar")

let stratvalue = 1
//shqo kale 
const jibar2 = 600.75


plus.addEventListener("click", () =>{
    stratvalue ++
    one.innerHTML = stratvalue
    //shaqo kalr
    jibar.innerHTML = stratvalue * jibar2
})

menis.addEventListener("click", () =>{
    if(stratvalue >1){
           stratvalue --
        one.innerHTML = stratvalue   
         jibar.innerHTML = stratvalue * jibar2



    }
    
})