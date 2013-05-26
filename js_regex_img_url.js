function  h(d){
   /**
    * Js_regex_img_url  
    * coder: xiaohudie
    * 2013-05-17
    */
    var a=/<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
    var b = [];
    while(c=a.exec(d)){
        b.push(c[2]);
    }
    return b;
}
var d= document.f.g.value; 
///alert(e.join('\n')); 
