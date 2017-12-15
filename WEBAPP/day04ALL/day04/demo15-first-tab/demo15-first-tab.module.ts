import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo15FirstTabPage } from './demo15-first-tab';

@NgModule({
  declarations: [
    Demo15FirstTabPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo15FirstTabPage),
  ],
  exports: [
    Demo15FirstTabPage
  ]
})
export class Demo15FirstTabPageModule {}
