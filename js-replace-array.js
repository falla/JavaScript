String.prototype.replaceArr  = function(find, replace) {
  var replaceString  = this;
  var xhdNew; 
  for (var i = 0; i < find.length; i++) {
    xhdNew = new RegExp(find[i], "g");
    replaceString  = replaceString .replace(xhdNew, replace[i]);
  }
  return replaceString;
};
function xhd(ooo){
var xhdget = ["http://", "https://", "www.","blog."];
var xhdput = ["", "", "",""];
document.getElementById("xxx").value= ooo.value.replaceArr ( xhdget, xhdput );
document.getElementById("email").value='admin@'+document.getElementById("xxx").value;
}
//<input onkeyup="xhd(this)" type="text" name="url" id="url" >网址
//<input id="xxx" type="hidden" />
//<input type="text" name="email" id="email" >邮箱
