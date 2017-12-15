/*
查找触发事件的元素
绑定事件
  查找要修改的元素
  修改元素
*/
//查找table下thead下的input
var chbAll=document.querySelector(
  "table>thead input"
);
//绑定单击事件:
chbAll.onclick=function(){
  //查找table下tbody下作为第一个子元素的td下的input
  var chbs=document.querySelectorAll(
    "table>tbody td:first-child>input"
  );
  //遍历所有input
  for(var chb of chbs){
    //将当前input的checked属性改为和全选input的checked一致
    chb.checked=chbAll.checked;
  }
}
//查找table下tbody下作为第一个子元素的td下的input
var chbs=document.querySelectorAll(
  "table>tbody td:first-child>input"
);
for(var chb of chbs){//遍历每个chb,
  //为每个chb绑定单击事件
  chb.onclick=function(){
    if(!chb.checked)//如果自己未选中
      //则chbAll肯定也是未选中
      chbAll.checked=false;
    else{//否则
      //查找table下tbody下作为第一个子元素的td下的未选中的input
      var checked=document.querySelector(
  "table>tbody td:first-child>input:not(:checked)"
      );
      //只要找到,chbAll就不选,否则,chbAll就选中
      chbAll.checked=(checked==null);
    }
  }
}