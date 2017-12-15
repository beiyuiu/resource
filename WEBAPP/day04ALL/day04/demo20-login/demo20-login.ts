import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo21MainPage} from 
'../demo21-main/demo21-main'
import {Demo22LifecyclePage} from 
'../demo22-lifecycle/demo22-lifecycle'
/**
 * Generated class for the Demo20LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo20-login',
  templateUrl: 'demo20-login.html',
})
export class Demo20LoginPage {
  uName:string = "";

  myDestination:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDestination = Demo22LifecyclePage;    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo20LoginPage');
  }

  //跳转到demo21MainPage，并将用户名作为参数发送
  //给demo21MainPage
  jump(){
    this.navCtrl.push(
      Demo21MainPage,
      {userName:this.uName}
      )
  }

}
