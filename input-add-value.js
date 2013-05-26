function xhd(ooo){
document.getElementById("xxx").value= ooo.value.replace('http://', '')
document.getElementById("email").value='admin@'+document.getElementById("xxx").value;
}
//how to use this
//
//<input onkeyup="xhd(this)" type="text" name="url" id="url" >网址
//<input id="xxx" type="hidden" />
//<input type="text" name="email" id="email" >邮箱
