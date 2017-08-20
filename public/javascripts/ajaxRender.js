
function ajaxRender(divID,response){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById(divID).innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET",response,true);
    xmlhttp.send();
}
