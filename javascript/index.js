const profile = new Profile();
const ui = new UI();
var input =document.querySelector("#searchProfile");
var container = document.querySelector("#loguser")


input.addEventListener("keyup",function(e){

    var text= e.target.value

    if(text.length===0){
        container.style.display="none"
    }else{
        container.style.display="block"
    }
    
    if(text!==''){
        profile.getProfile(text)
         .then(res => {
                 if(res.profile.length === 0){
 
                 }else{
                    ui.showProfile(res.profile);
                 }        
             
             })   
         }
         
})
