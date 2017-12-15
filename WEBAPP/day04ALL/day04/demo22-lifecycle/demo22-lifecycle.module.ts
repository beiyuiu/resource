import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo22LifecyclePage } from './demo22-lifecycle';

@NgModule({
  declarations: [
    Demo22LifecyclePage,
  ],
  imports: [
    IonicPageModule.forChild(Demo22LifecyclePage),
  ],
  exports: [
    Demo22LifecyclePage
  ]
})
export class Demo22LifecyclePageModule {}
