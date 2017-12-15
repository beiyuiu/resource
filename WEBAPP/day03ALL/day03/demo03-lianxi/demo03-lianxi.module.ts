import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03LianxiPage } from './demo03-lianxi';

@NgModule({
  declarations: [
    Demo03LianxiPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03LianxiPage),
  ],
  exports: [
    Demo03LianxiPage
  ]
})
export class Demo03LianxiPageModule {}
