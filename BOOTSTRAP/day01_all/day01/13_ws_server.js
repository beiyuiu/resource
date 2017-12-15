/***
 * 使用第三方ws模块创建一个WS协议的服务器
 */
const ws = require('ws');

//创建ws服务器，监听指定的端口
var server = new ws.Server({port:9001});
console.log('WS服务器开始监听端口');

server.on('connection', (socket)=>{
  console.log('WS服务器接收到一个连接');

  //WS服务器不停的向客户端发送消息
  var counter = 0;
  var timer = setInterval(()=>{
    counter++;
    socket.send('I am Server - '+ counter);
  }, 1000);

  //WS服务器接收客户端发来的消息
  socket.on('message', (msg)=>{
    console.log('服务器接收到消息：'+msg);
  })

  //WS服务器接收到客户端发来的断开连接请求
  socket.on('close', ()=>{
    console.log('客户端断开了连接')
    clearInterval(timer); //不再继续发送消息
  })
})