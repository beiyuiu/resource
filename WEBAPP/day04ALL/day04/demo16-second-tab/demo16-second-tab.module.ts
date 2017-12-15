import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo16SecondTabPage } from './demo16-second-tab';

@NgModule({
  declarations: [
    Demo16SecondTabPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo16SecondTabPage),
  ],
  exports: [
    Demo16SecondTabPage
  ]
})
export class Demo16SecondTabPageModule {}
