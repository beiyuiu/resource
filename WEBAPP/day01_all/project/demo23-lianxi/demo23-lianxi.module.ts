import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo23LianxiPage } from './demo23-lianxi';

@NgModule({
  declarations: [
    Demo23LianxiPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo23LianxiPage),
  ],
  exports: [
    Demo23LianxiPage
  ]
})
export class Demo23LianxiPageModule {}
