import { Component } from '@angular/core';
import {ToastController, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo23LianxiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo23-lianxi',
  templateUrl: 'demo23-lianxi.html',
})
export class Demo23LianxiPage {
  myList = [];
  //myList=[100,200,300,400,500,600,700,800,900,1000];
  constructor(
    public myToastCtrl:ToastController,
    public myLoadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo23LianxiPage');
  }

  //在准备进入时，处理数据
  ionViewWillEnter() {
    console.log('准备进入');
    this.myLoadingCtrl.create({
      content: '正在加载数据',
      duration: 3000
    }).present();

    setTimeout(()=>{
      this.myList=[100,200,300,400,500,600,700,800,900,1000];
    },3000);
  }

  doRefresh(refresher){
    setTimeout(()=>{
      this.myList.unshift(99);
      refresher.complete();
    },2000)
  }

  loadMore(infinite){
    setTimeout(()=>{
      this.myList.push(11111);
      infinite.complete();
    },2000);
  }

  //显示一个通知
  showToast(){
    this.myToastCtrl.create({
      message:'您按下了列表项',
      duration:1500,
      position:'top'
    }).present();
  }

}
