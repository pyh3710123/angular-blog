
/*导入Augular路由*/
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';   //配置路由模块

import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { TodosComponent } from './components/todos/todos.component';
import {BlogsComponent} from './components/blogs/blogs.component'
import {HomeComponent} from './components/home/home.component';
import {CmsComponent} from './components/cms/cms.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TestComponentComponent} from './components/test-component/test-component.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BlogDetailComponent} from './components/blog-detail/blog-detail.component';


const AppRoutes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},//redirectTO 后面必须加,pathMatch:'full' 定义一个默认页面

  {path:'home',component:HomeComponent},

  {path:'about',component:AboutComponent},

  {path:'contact',component:ContactComponent},

  {path:'blogs',component:BlogsComponent},


  {path:'blogdetail/:id',component:BlogDetailComponent},
  

  {path:'todos',component:TodosComponent},

  {path:'profile',component:ProfileComponent},

  {path:'cms',component:CmsComponent},

  {path:'not-found',component:NotFoundComponent},

  {path:'test-component',component:TestComponentComponent},

  {path:'**',component:NotFoundComponent},


];

export const AppRouting:ModuleWithProviders=RouterModule.forRoot(AppRoutes)
