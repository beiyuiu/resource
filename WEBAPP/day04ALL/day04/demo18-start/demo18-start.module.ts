import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo18StartPage } from './demo18-start';

@NgModule({
  declarations: [
    Demo18StartPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo18StartPage),
  ],
  exports: [
    Demo18StartPage
  ]
})
export class Demo18StartPageModule {}
