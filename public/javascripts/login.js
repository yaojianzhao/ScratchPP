/**
 * Created by yaojianzhao on 2017/7/26.
 */

// function initHeader(){
//     $(".pTitle").arctext({radius:160});
// }

// function load(){
//     alert("load");
//     var xmlhttp=new XMLHttpRequest();
//     xmlhttp.onreadystatechange=function()
//     {
//         if (xmlhttp.readyState==4 && xmlhttp.status==200)
//         {
//             document.getElementById("idMainBody").innerHTML=xmlhttp.responseText;
//         }
//     }
//     xmlhttp.open("GET","/",true);
//     xmlhttp.send();
// }

function toRegister(){
    ajaxRender("idForm","/login/registerForm");
}

function toLogin(){
    ajaxRender("idForm","/login/loginForm");
}

function toForgetPassword(){
    ajaxRender("idForm","/login/forgetPasswordForm");
}