function pageLoad(pno=0){
  //读取url中的关键词?kw=xxxxxxxx
  var kw=location.search.split("=")[1]||"";
  //ajax请求服务器端查询包含关键词的商品
  ajax(
    "get",
    "data/04-products/products.php?kw="+kw+"&pno="+pno,
    ""
  ).then(output=>{
    var data=output.data;
    console.log(data);
    var html="";
    for(var p of data){
      html+=`<li>
            <a href="05-product-details.html?lid=${p.lid}" title="${p.title}">
              <img src="${p.md}">
            </a>
            <p>
              <span class="price">¥${p.price}</span>
              <a href="05-product-details.html?lid=${p.lid}">${p.title}</a>
            </p>
            <div>
              <span class="reduce">-</span>
              <input type="text" value="1">
              <span class="add">+</span>
              <a href="#" class="addCart">加入购物车</a>
            </div>
          </li>`
    }
    var ulShowList=
      document.getElementById("show-list")
    ulShowList.innerHTML=html;
    //查找#show-list下的class为reduce和class为add的元素
    var spans=ulShowList.querySelectorAll(
      ".reduce,.add"
    );
    for(var span of spans){
      span.onclick=function(){
        //this->span
        var input=this.parentNode.children[1];
        var n=parseInt(input.value);
        if(this.className=="add") n++;
        else if(n>1) n--;
        input.value=n;
      }
    }

    var pageCount=output.pageCount,
        pageNo=output.pageNo;
    var lis="";
    for(var i=0;i<pageCount;i++){
      lis+=(i!=pageNo?`<a href="#">${i+1}</a>`:
        `<a href="#" class="current">${i+1}</a>`);
    }
    var html=
      `<a href="#" class="previous">上一页</a>${
        lis
      }<a href="#" class="next">下一页</a>`;
    var divPages=document.getElementById("pages");
    divPages.innerHTML=html;
    if(pageNo==0){
      divPages.firstElementChild.className=
        "previous disabled";
    }else if(pageNo==pageCount-1){
      divPages.lastElementChild.className=
        "next disabled";
    }else{
      divPages.firstElementChild.className=
        "previous";
      divPages.lastElementChild.className=
        "next";
    }

    //找到divPages下除.previous和.next之外的剩余as
    //遍历as中每个a
      //为每个a绑定单击事件:
        //调用pageLoad,传入当前a的内容-1
    //找到divPages的第一个子元素，绑定单击事件
      //?
    //找到divPages的最后一个子元素,绑定单击事件
      //?
  })
}
pageLoad();