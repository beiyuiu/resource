import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo19EndPage } from './demo19-end';

@NgModule({
  declarations: [
    Demo19EndPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo19EndPage),
  ],
  exports: [
    Demo19EndPage
  ]
})
export class Demo19EndPageModule {}
