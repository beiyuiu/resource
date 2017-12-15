import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo13RefresherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo13-refresher',
  templateUrl: 'demo13-refresher.html',
})
export class Demo13RefresherPage {
  list = [100,200,300,400,500,100,200,300,400,500];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo13RefresherPage');
  }

  //下拉刷新数据的处理函数
  doRefresh(refresher){
    console.log(refresher);
    //2s之后结束掉刷新动作
    setTimeout(()=>{
      this.list.unshift(Math.floor(Math.random()*100));
      refresher.complete();
    },2000);
  }

  //加载更多
  loadMore(infinite){
    setTimeout(()=>{
      this.list.push(
        Math.floor(Math.random()*1000));
      //结束掉刷新动作
      infinite.complete();
    },2000)
  }

}
