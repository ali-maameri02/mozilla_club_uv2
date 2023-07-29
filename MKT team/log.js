
var button=document.getElementById("join");
var closing=document.getElementById("close");
button.addEventListener("click",Showlog);
closing.addEventListener("click",closeform);
function Showlog() {
    document.getElementById("sign").style.display="block";
}
function closeform(){
    document.getElementById("sign").style.display="none";
}
var form=document.getElementById("sign-form");
var send =document.getElementById("ok");
send.addEventListener("click",message);
function message(){
    form.innerHTML="<p style='color:orange;'>Thanks for The inscription check your email we will contact you"+"<br>"+'<img src="mozlogo.png" width="40px" class="mozlogo">';
}