// 配置路由词典
// a-module-routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 修改1：正确的去引入对应的组件类
import { Demo12Component } 
from './demo12/demo12.component';
import {Demo13Component} 
from './demo13/demo13.component'
import {NotFoundComponent} 
from './notFound/not-found.component'
import {Demo14Component} 
from './demo14/demo14.component'


// 修改2：配置路由词典
const routes: Routes = [
  { path: '', component:Demo12Component},
  { path: 'demo12', component: Demo12Component },
  { path: 'demo13', component: Demo13Component },
  { path: 'demo14/:uName', component: Demo14Component },
  { path: '**',component:NotFoundComponent},
  
];

// 修改3：将forChild-->forRoot
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// 修改4：指定导出的模块类的名称
export class AppRoutingModule { }

// export const routedComponents = [NameComponent];