import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo17FormPage } from './demo17-form';

@NgModule({
  declarations: [
    Demo17FormPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo17FormPage),
  ],
  exports: [
    Demo17FormPage
  ]
})
export class Demo17FormPageModule {}
