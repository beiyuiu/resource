/*DOM操作基本步骤
查找触发事件的元素
绑定事件
  查找要修改的元素
  修改元素
*/
//查找class为tree下的直接子元素li下的直接子元素span
var spans=
  document.querySelectorAll(".tree>li>span");
//遍历所有span，为每个span绑定单击事件
for(var span of spans){
  span.onclick=function(){
    //this->当前单击的span
    //如果自己的class是open
    if(this.className=="open")
      this.className="";//将自己的class清空
    else{//否则
      //找到旁边可能开着的span(找不到，返回null!)
      var openSpan=document.querySelector(
        ".tree>li>span.open"
      );
      //如果找到，就清除其class
      if(openSpan!=null) openSpan.className="";
      //将自己打开
      this.className="open";
    }
  }
}
