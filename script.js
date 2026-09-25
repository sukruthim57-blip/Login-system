
let button=document.getElementById("submit")
let message=document.getElementById("message")

button.addEventListener("click",function() {
    let name=document.getElementById("name").value 
let password=document.getElementById("password").value

    if(name=="sukruthi" && password=="lilly@123") {
        message.innerText="Login successfull"
        message.style.color="green"

    }else{
         message.innerText="Invalid name or password"
        message.style.color="red"

        
    }
})