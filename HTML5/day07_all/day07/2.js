function getSum(num){
  var rs = 0;
  for(var i=1;i<=num;i++){
    rs += i;
  }
  return rs;
}
//1:待等待用户输入数据 onmessage
onmessage = function(e){
  var val = e.data;
  //2:获取数据计算
  var rs = getSum(val);
  //3:将结果返回UI主线程
  postMessage(rs);
}

