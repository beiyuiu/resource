(()=>{           //?lid=10
var lid=location.search.split("=")[1];
if(lid!==undefined)
ajax(
  "get",
  "data/05-product-details/details.php?lid="+lid,
  ""
).then(data=>{
  var laptop=data.laptop,
      family=data.family;

  /*加载左上角图片:*/
  var mImg=document.getElementById("mImg"),
      largeDiv=
        document.getElementById("largeDiv"),
      icon_list=
        document.getElementById("icon_list");
  //设置mImg的src为当前商品的第一张图片的中图片
  mImg.src=laptop.pics[0].md;
  //设置largeDiv的backgroundImage为url(第一张图片的大图片)
  largeDiv.style.backgroundImage=
    `url(${laptop.pics[0].lg})`;
  var html="";//定义空字符串html
  //遍历当前商品的每张图片
  for(var pic of laptop.pics){
    //向html中拼接
    html+=`<li class="i1"><img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`;
  }//(遍历结束)
  //设置icon_list的内容为html
  icon_list.innerHTML=html;

  /*加载右上角商品基本信息*/
  var title=document.querySelector(
        "#show-details>h3>a"),
      price=document.querySelector(
        "#show-details>.price>.stu-price>span"),
      promise=document.querySelector(
        "#show-details>.price>.promise"),
      spec=document.querySelector(
        "#show-details>.spec>div");
  title.innerHTML=laptop.title;
  price.innerHTML="¥"+laptop.price;
  promise.innerHTML+=laptop.promise;
  
  var html="";
  //遍历当前系列下的商品列表
  for(?){
    如果当前系列下当前商品的lid不等于laptop的lid
      html+=`<a href="05-product-details.html?lib=${当前系列下当前商品的lid}">${当前系列下当前商品的spec}</a>`;
    否则
      html+=`<a href="05-product-details.html?lib=${当前系列下当前商品的lid}" class="active">${当前系列下当前商品的spec}</a>`
  }
  spec.innerHTML=html;
})
})()