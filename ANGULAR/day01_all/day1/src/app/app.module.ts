import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Demo01Component } 
from './demo01/demo01.component'
import {Demo02Component} 
from './demo02/demo02.component'
import {Demo03Component}
from './demo03/demo03.component'
import {Demo04Component}
from './demo04/demo04.component'
import {Demo05Component} 
from './demo05/demo05.component'
import {Demo06Component} 
from './demo06/demo06.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [Demo06Component,Demo05Component,Demo04Component,Demo03Component,Demo02Component,Demo01Component, AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
