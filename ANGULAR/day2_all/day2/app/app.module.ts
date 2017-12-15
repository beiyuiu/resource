import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }
  from '@angular/forms'
import {AppRoutingModule} from './app.route'

import { AppComponent } from './app.component';
import { Demo01Component }
  from './demo01/demo01.component'
import { Demo02Component }
  from './demo02/demo02.component'
import { Demo03Component }
  from './demo03/demo03.component'
import { Demo04Component }
  from './demo04/demo04.component'
import { Demo05Component }
  from './demo05/demo05.component'
import { Demo06Component }
  from './demo06/demo06.component'
import { Demo07Component } from './demo07/demo07.component'
import { MyInputComponent } from './demo07/myinput.component'
import { Demo08Component } from './demo08/demo08.component'
import { Demo09Component }
  from './demo09/demo09.component'
import {Demo10Component}   
from './demo10/demo10.component'
import {Demo11Component}
from './demo11/demo11.component'
import {TestDirective} 
from './demo11/test.directive'
import {Demo12Component} from 
'./demo12/demo12.component'
import {Demo13Component} from 
'./demo13/demo13.component'
import {NotFoundComponent} 
from './notFound/not-found.component'
import {Demo14Component} 
from './demo14/demo14.component'

@NgModule({
  imports: 
  [
    AppRoutingModule,
    FormsModule, 
    BrowserModule
  ],
  declarations:
  [
    Demo14Component,
    NotFoundComponent,
    Demo13Component,
    Demo12Component,
    TestDirective,
    Demo11Component,
    Demo10Component,
    Demo09Component,
    Demo08Component,
    MyInputComponent,
    Demo07Component,
    Demo06Component,
    Demo05Component,
    Demo04Component,
    Demo03Component,
    Demo02Component,
    Demo01Component,
    AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
