import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo21MainPage } from './demo21-main';

@NgModule({
  declarations: [
    Demo21MainPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo21MainPage),
  ],
  exports: [
    Demo21MainPage
  ]
})
export class Demo21MainPageModule {}
