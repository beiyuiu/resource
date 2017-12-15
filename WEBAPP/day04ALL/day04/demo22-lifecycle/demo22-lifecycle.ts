import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo22LifecyclePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo22-lifecycle',
  templateUrl: 'demo22-lifecycle.html',
})
export class Demo22LifecyclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo22LifecyclePage');
  }

  ionViewWillEnter(){
    console.log('准备进入');
  }

  ionViewDidEnter(){
    console.log('已经进入');
  }

  ionViewWillLeave(){
    console.log('准备离开');
  }

  ionViewDidLeave(){
    console.log('已经离开');
  }

  ionViewWillUnload(){
    console.log('准备移除');
  }

  // 页面守卫
  ionViewCanEnter(){
    return true;
  }

  ionViewCanLeave(){
    return true;
  }

}
