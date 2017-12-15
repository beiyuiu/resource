import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo04ButtonPage } from './demo04-button';

@NgModule({
  declarations: [
    Demo04ButtonPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo04ButtonPage),
  ],
  exports: [
    Demo04ButtonPage
  ]
})
export class Demo04ButtonPageModule {}
