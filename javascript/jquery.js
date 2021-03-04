const moon =document.querySelector("#moon");
const body =document.querySelector("#body");
const iclas =document.querySelector(".fa-moon-stars")

moon.addEventListener("click",function(){
    if(body.style.background==="white"){
        body.style.background="black"
        iclas.style.color="white"
    }else{
        body.style.background="white"
        iclas.style.color="yellow"
    }
    
   
})

