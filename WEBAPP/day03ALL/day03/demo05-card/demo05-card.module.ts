import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo05CardPage } from './demo05-card';

@NgModule({
  declarations: [
    Demo05CardPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo05CardPage),
  ],
  exports: [
    Demo05CardPage
  ]
})
export class Demo05CardPageModule {}
