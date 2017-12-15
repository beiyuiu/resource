//递归方式: 
//Step1: 定义函数，仅遍历指定父元素下的直接子元素
function getChildren1(parent){
  console.log(parent.nodeName);
  var children=parent.children;
  for(var i=0,len=children.length;i<len;i++){
    //Step2: 为每个子元素调用和父元素完全相同的操作
    arguments.callee(children[i]);
  }
}
//循环方式: 
function getChildren2(parent){
  //创建节点迭代器对象:
  var iterator=document.createNodeIterator(
    parent, NodeFilter.SHOW_ELEMENT, null, false  
  );
  //反复调用iterator的nextNode方法跳到下一个
  do{
    var node=iterator.nextNode();
    if(node!=null)
      console.log(node.nodeName);
    else break;
  }while(true);
}
getChildren2(document.body);

//测速前，暂时删除方法中的console.log
console.time("getChildren1");//开始
getChildren1(document.body);
console.timeEnd("getChildren1");//停止
console.time("getChildren2");
getChildren2(document.body);
console.timeEnd("getChildren2");