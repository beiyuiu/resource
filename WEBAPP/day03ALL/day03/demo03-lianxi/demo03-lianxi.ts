import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo03LianxiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo03-lianxi',
  templateUrl: 'demo03-lianxi.html',
})
export class Demo03LianxiPage {

  constructor(
    public myAlertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo03LianxiPage');
  }

  //显示一个确认窗口
  showConfirm(){
      let myConfirm = this.myAlertCtrl.create(
        {
          title:'请确认消息',
          message:'本次操作已生效',
          buttons:[
            {
              text:'确认',
              handler:function(){
                console.log('按下了确认按钮');
              }
            },
            {
              text:'取消',
              handler:function(){
                console.log('按下了取消按钮');
              },
              role:'cancel'
            }
          ]
        }
      )
      myConfirm.present();
  }

  //显示一个输入提示框
  showPrompt(){
     let myPrompt = this.myAlertCtrl.create({
       title:'输入手机号',
       inputs:[
         {
           label:'手机号',
           placeholder:'请输入手机号',
           type:'text'
         }
       ],
       buttons:[
         {
           text:'确认',
           handler:function(result){
            console.log('确认',result[0]);
           }
         },
         {
           text:'取消',
           handler:function(){
            console.log('取消');
           }
         }
       ]
     })

     myPrompt.present();
  }

}
