import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Demo19EndPage } 
from '../demo19-end/demo19-end'
/**
 * Generated class for the Demo18StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo18-start',
  templateUrl: 'demo18-start.html',
})
export class Demo18StartPage {

  myDestination:any;
  uName:string ="";

  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
    //给自定义变量进行赋值
    this.myDestination = Demo19EndPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo18StartPage');
  }

  jumpToDemo19(){
    this.navCtrl.push(Demo19EndPage);
  }

  //跳转到Demo19并发送参数
  sendArgToDemo19(){
    this.navCtrl.push(
      Demo19EndPage,{userName:this.uName});
  }

}
