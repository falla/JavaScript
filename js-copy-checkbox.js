function checkAll(name)//全选
{
var el = document.getElementsByTagName('input');
var len = el.length;
for(var i=0; i<len; i++)
{
if((el[i].type=="checkbox") && (el[i].name==name))
{
el[i].checked = true;
}
}
}
function clearAll(name)//反选
{
var el = document.getElementsByTagName('input');
var len = el.length;
for(var i=0; i<len; i++)
{
if((el[i].type=="checkbox") && (el[i].name==name))
{
el[i].checked = false;
}
}
}
function getChecked() {//获取checkbox已选项
var result = '';
var form = document.getElementById('getStart');
if(typeof form.xhd.length != 'undefined') {
for(var i=0; i<form.xhd.length; i++) {
if(form.xhd[i].checked) {
result += form.xhd[i].value + ' ';
}
}
} else {
if(form.xhd_type.checked) {
result += form.xhd_type.value + ' ';
}
}
if(result == '') {
document.getElementById('result').innerHTML ='';
} else {
document.getElementById('result').innerHTML = result;
}
}
function copyTo(theField,isalert)//复制
{
var obj=document.getElementById(theField);
if(obj!=null)
{
var clipBoardContent=obj.value;
obj.select();
window.clipboardData.setData("Text",clipBoardContent);
if(isalert!=false)
alert("DONE!");
}
else
{
alert("ERROR!");
}
}
