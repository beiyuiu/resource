import { Component } from '@angular/core';
import {LoadingController, AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo12LianxiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo12-lianxi',
  templateUrl: 'demo12-lianxi.html',
})
export class Demo12LianxiPage {
  isListShow:boolean = false;
  myList = [
    {
      imgUrl:'1.jpg',
      info:'商品1'
    },
    {
      imgUrl:'2.jpg',
      info:'商品2'
    },
    {
      imgUrl:'3.jpg',
      info:'商品3'
    }
  ]

  constructor(
    public myAlertCtrl:AlertController,
    public myLoadCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo12LianxiPage');
  }

  //显示一个输入提示框
  showPrompt(){
    let myPrompt = this.myAlertCtrl.create({
      title:'请输入手机号',
      inputs:[
        {
          type:'text',
          placeholder:'请输入您的手机号'
        }
      ],
      buttons:[
        {
          text:'确认',
          handler:()=>{
            console.log('按下了确认');
            this.showLoading();
          }
        },
        {
          text:'取消',
          handler:function(){
            console.log('按下了取消');
          }
        }
      ]
    })

    myPrompt.present();
  }

  showLoading(){
    let myLoading = this.myLoadCtrl.create({
      content:'正在验证手机号'
    });
    myLoading.present();
    setTimeout(()=>{
      myLoading.dismiss();
      //把列表显示
      this.isListShow = true;
    },3000)
  }

}
