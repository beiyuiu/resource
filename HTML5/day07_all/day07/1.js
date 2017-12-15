
//计算指定参数是否是质数
//是质数返回    true
//不是质数返回  false
//16:32--16:35
//3 5 7 11 13
function isPrime(num){
  //方法一:执行耗时程序失败 5s
  var start = new Date().getTime();//1000
  do{
    var end = new Date().getTime();//1002
  }while(end-start<=1000);
  //方法二:执行耗时程序失败 2ms
  for(var i=2;i<num;i++){
    if(num%i==0){
      break;
    }
  }
  if(i==num){
    return true;
  }else{
    return false;
  }
}
console.time("a001");
var rs = isPrime(7821721711);
//var result = document.getElementById("result");
//result.innerHTML = rs;
//将Worker计算结果返回UI主线程
postMessage(rs);
console.timeEnd("a001");
onmessage = function(e){
  console.log("接收UI线程数据"+e.data);
}

