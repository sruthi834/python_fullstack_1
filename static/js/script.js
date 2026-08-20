let registerForm = document.getElementById("registerForm")
if(registerForm){
    registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;
        let email=document.getElementById("date").value;
        let password=document.getElementById("password").value;
        let date=document.getElementById("date").value;
        let male=document.getElementById("male").checked;
        let female=document.getElementById("female").checked;
        let course=document.querySelector('input [name="course":checked').value;    
    }
    ) 
}
