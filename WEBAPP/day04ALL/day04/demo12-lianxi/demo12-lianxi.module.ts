import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo12LianxiPage } from './demo12-lianxi';

@NgModule({
  declarations: [
    Demo12LianxiPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo12LianxiPage),
  ],
  exports: [
    Demo12LianxiPage
  ]
})
export class Demo12LianxiPageModule {}
