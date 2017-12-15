import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo20LoginPage } from './demo20-login';

@NgModule({
  declarations: [
    Demo20LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo20LoginPage),
  ],
  exports: [
    Demo20LoginPage
  ]
})
export class Demo20LoginPageModule {}
