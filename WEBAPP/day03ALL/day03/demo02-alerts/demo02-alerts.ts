import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController,
   NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo02AlertsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo02-alerts',
  templateUrl: 'demo02-alerts.html',
})
export class Demo02AlertsPage {

  constructor(
    public myAlertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo02AlertsPage');
  }

  showAlert(){
    // 创建
    let myAlert = 
    this.myAlertCtrl.create({
      title:'myWindow',
      message:'警告，快要下课吃饭了!'
    });

    // 显示
    myAlert.present();
  }


}
