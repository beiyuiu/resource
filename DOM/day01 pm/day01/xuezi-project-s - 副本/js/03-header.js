//加载header
(()=>{
  ajax("get","03-header.html","","text")
    .then(html=>{
  document.getElementById("header").innerHTML=html;
    
    /*为查询按钮绑定单击事件跳转*/
    //查找id为top-input的div
    var topInput=
      document.getElementById("top-input");
    //在topInput下查找class为search-img的a元素，绑定单击事件
   topInput.getElementsByClassName("search-img")[0]
      .onclick=function(){
      //获取旁边id为txtSearch的input的内容
      var kw=
        document.getElementById("txtSearch").value;
      //如果内容不是空
      if(kw.trim().length!=0){
        //拼接url:
        var url=
          "http://localhost/xuezi-project-s/04-products.html?kw="+kw;
        //跳转到url的页面
        location=url;
      }
    }
  })
})();


  
