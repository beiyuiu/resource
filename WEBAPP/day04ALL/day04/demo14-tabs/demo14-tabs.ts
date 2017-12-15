import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Demo15FirstTabPage} from 
'../demo15-first-tab/demo15-first-tab'
import {Demo16SecondTabPage} from 
'../demo16-second-tab/demo16-second-tab'

/**
 * Generated class for the Demo14TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo14-tabs',
  templateUrl: 'demo14-tabs.html',
})
export class Demo14TabsPage {
  firstTab:any;
  secondTab:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstTab = Demo15FirstTabPage;
    this.secondTab = Demo16SecondTabPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo14TabsPage');
  }

}
