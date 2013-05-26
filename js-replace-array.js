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
//to use
//<input onkeyup="xhd(this)" type="text" id="urldemo">
//<input id="xxx" type="hidden">
//<input type="text" id="emaildemo">
