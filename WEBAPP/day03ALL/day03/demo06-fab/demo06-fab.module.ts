import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo06FabPage } from './demo06-fab';

@NgModule({
  declarations: [
    Demo06FabPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo06FabPage),
  ],
  exports: [
    Demo06FabPage
  ]
})
export class Demo06FabPageModule {}
