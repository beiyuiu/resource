import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo14TabsPage } from './demo14-tabs';

@NgModule({
  declarations: [
    Demo14TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo14TabsPage),
  ],
  exports: [
    Demo14TabsPage
  ]
})
export class Demo14TabsPageModule {}
