(()=>{
  //如果只找一个: querySelector, 
  //能找到多个：querySelectorAll
  //查找id为form1的表单form
  var form=document.querySelector("#form1");
  //查找表单中name为username的文本框txtName
  var txtName=document.querySelector(
    "#form1 [name=username]"
  );
  //查找表单中name为pwd的文本框txtPwd
  var txtPwd=document.querySelector(
    "#form1 [name=pwd]"
  );
  //当txtName获得焦点时以及txtPwd获得焦点时
  //都执行同一个函数: 
  txtName.onfocus=txtPwd.onfocus=function(){
    //给自己穿txt_focus
    this.className="txt_focus";
    //找到旁边的div,清空其class
    this.parentNode.nextElementSibling.children[0]
      .className="";
  } 

  //当txtName失去焦点时
  txtName.onblur=function(){
    var reg=/^\w{1,10}$/;//定义正则表达式
    vali(this,reg);//调用vali传入this和正则作为参数
  }
  txtPwd.onblur=function(){//当txtPwd失去焦点时
    var reg=/^\d{6}$/;//定义正则表达式
    vali(this,reg);//调用vali传入this和正则作为参数
  }
  //定义函数vali,参数: 文本框, 正则
  function vali(txt,reg){
    txt.className="";//给文本框脱衣服
    var div=//找到文本框旁边的div
    txt.parentNode.nextElementSibling.children[0];
    //如果用正则验证文本框的内容通过
    if(reg.test(txt.value)==true)
      //为div穿vali_success
      div.className="vali_success";
    else//否则 为div穿vali_fail
      div.className="vali_fail";
  }
})()