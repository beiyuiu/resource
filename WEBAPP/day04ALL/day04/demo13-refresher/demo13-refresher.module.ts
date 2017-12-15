import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo13RefresherPage } from './demo13-refresher';

@NgModule({
  declarations: [
    Demo13RefresherPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo13RefresherPage),
  ],
  exports: [
    Demo13RefresherPage
  ]
})
export class Demo13RefresherPageModule {}
