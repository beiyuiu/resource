//获得s1的父元素
//console.log(s1.parentNode);//body
console.log(s1.parentElement);//body
//获得body的直接子元素
//console.log(document.body.childNodes);//7个
console.log(document.body.children);//3个
//获得s1的下一个兄弟元素
console.log(s1.nextElementSibling);//h1
//获得body下的h1
var h1=document.body.children[1];
console.log(h1);//h1
//获得h1的前一个元素
console.log(h1.previousElementSibling);//span