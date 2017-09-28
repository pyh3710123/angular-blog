
/*Augular 导入核心*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';  //配置表单模块
import { HttpModule }from '@angular/http'; //配置HTTP协议

/*Augular 导入组件*/
import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CmsComponent } from './components/cms/cms.component';
import { TodosComponent } from './components/todos/todos.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import {AppRouting} from './app.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { PasswordRestComponent } from './components/password-rest/password-rest.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { RedbackDirective } from './directives/redback.directive';
import { StrucDirectiveDirective } from './directives/struc-directive.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { WeatherinfoComponent } from './components/weatherinfo/weatherinfo.component';



/*Augular 导入核心*/
@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListItemComponent,
    NavigationComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    TestComponentComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BlogsComponent,
    CmsComponent,
    TodosComponent,
    BackToTopComponent,
    NotFoundComponent,
    InventoryComponent,
    UserRoleComponent,
    PasswordRestComponent,
    ProfileComponent,
    BlogDetailComponent,
    RedbackDirective,
    StrucDirectiveDirective,
    BooleanPipe,
    WeatherinfoComponent,

  ],
  imports: [             //放模块
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],             //提供器

  bootstrap: [AppComponent] //引导启动
})
export class AppModule { }
