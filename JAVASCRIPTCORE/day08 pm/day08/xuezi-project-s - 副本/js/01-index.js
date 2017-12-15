(()=>{
  ajax("get","03-header.html","","text")
    .then(html=>
    document.getElementById("header").innerHTML=html
  )
})();
(()=>{
  ajax("get","data/01-index/floors.php","")
    .then(output=>{
    //根据规定的模板,动态生成f1的HTML代码片段
    var html="";
    var f1=output.f1;
    for(var i=0;i<f1.length;i++){
      var p=f1[i];
      html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
              parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
        i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
                parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
        `<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
            parseFloat(p.price).toFixed(2)
          }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
    }
    document.getElementById("f1-content")
            .innerHTML=html;
  })
})()