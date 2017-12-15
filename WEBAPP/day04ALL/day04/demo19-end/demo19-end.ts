import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo19EndPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo19-end',
  templateUrl: 'demo19-end.html',
})
export class Demo19EndPage {
  uName:string = "";
  constructor(public navCtrl: NavController,
   public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo19EndPage');
    console.log(this.navParams);
    // 需要接收用户传递来的参数 并显示在视图中
    //this.uName = this.navParams.data.userName;
    this.uName = this.navParams.get('userName');
  }
  //返回上一页
  backToPre(){
    this.navCtrl.pop();
  }

}
