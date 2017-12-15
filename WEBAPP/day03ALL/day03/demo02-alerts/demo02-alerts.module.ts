import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo02AlertsPage } from './demo02-alerts';

@NgModule({
  declarations: [
    Demo02AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo02AlertsPage),
  ],
  exports: [
    Demo02AlertsPage
  ]
})
export class Demo02AlertsPageModule {}
