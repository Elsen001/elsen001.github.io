var inputId = document.querySelector("#pwd");
var lock = document.querySelector(".fa-lock-open");

    inputId.addEventListener("keyup",function(){

        

        if(inputId.value.length>0){
            lock.style.display="block"
            lock.addEventListener("click",function(){
                if(inputId.type==="password"){
                    inputId.type="text"
                }else{
                    inputId.type="password"
                }
                
            })
            
            
        }else{
            lock.style.display="none"
        }
    })



var sendform = document.querySelector("#sendform")
var firstname = document.querySelector("#Firstname")
var lastname =document.querySelector("#Lastname")
var username =document.querySelector("#Username")
var email =document.querySelector("#Email")
var password1 =document.querySelector("#Password")
var password2 =document.querySelector("#Re-Password")
var passmsg =document.querySelector("#passmsg")

function error(input, message) {
    input.className = 'form-control is-invalid';
    input.setAttribute("placeholder",message);
 
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} place enter...`);
        } else {
            success(input);
        }
    });  
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input,'Email place enter...');
    }
}

function Passwords(input1,input2) {
    if(input1.value !== input2.value) {
        input2.value=""
        error(input2, 'Sifreler eyni deyil...');
       

    }
}

sendform.addEventListener("submit",function (e) { 



    e.preventDefault()
    checkRequired([firstname,lastname,username,password1,password2]);
    checkEmail(email)
    Passwords(password1,password2)
 })


 
