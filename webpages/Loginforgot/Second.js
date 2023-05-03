let pass;
let copass;
function checkPass(){
pass=document.getElementById("password");
copass=document.getElementById("confim-password");

    let p=(pass.value);
    let c=(copass.value);
    if(p != 0)
    {
    if (p === c)
    {
        //need password go to database
        window.location.replace("http://127.0.0.1:5500/Loginforgot/Goback.html");
    }
    else 
    {
        mess.textContent="Password Not Matched";
        mess.style.color="red";
    }
    }

}
