import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RootComponent } from './app.component';
import { LogoComponent1 } from './logo/logo.component';
import { ReviewComponent } from './shop/review/review.component';
import { ReviewTitleComponent } from './shop/review-title/review-title.component';
import { ReviewDescriptionComponent } from './shop/review-description/review-description.component';
import { ReviewImageComponent } from './shop/review-image/review-image.component';
import { ReviewAuthorComponent } from './shop/review-author/review-author.component';
import { NgforComponentComponent } from './directive/ngfor-component/ngfor-component.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { TodoComponent } from './myapp/todo/todo.component';
import { TemplateComponent } from "./forms/template/template.component";
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { FormComponent } from './forms/form/form.component';
import { Useservice1Component } from "./useservice/useservice1/useservice1.component";
import { RemoteComponent } from './consume/remote/remote.component';
import { RemoteEmployeeComponent } from './consume/remote-employee/remote-employee.component';
import { ViewEmployeeComponent } from './consume/view-employee/view-employee.component';
import { AnimatetextComponent } from './animation/animatetext/animatetext.component';

@NgModule(
  {
  declarations: [ 
    RootComponent, 
    LogoComponent1, 
    ReviewComponent, 
    ReviewTitleComponent, 
    ReviewDescriptionComponent, 
    ReviewImageComponent, 
    ReviewAuthorComponent, 
    NgforComponentComponent, 
    InbuiltComponent, 
    TodoComponent, 
    TemplateComponent, 
    ReactiveComponent, 
    FormComponent ,
    Useservice1Component,
    RemoteComponent,
    RemoteEmployeeComponent,
    ViewEmployeeComponent,
    AnimatetextComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:'logo',
        pathMatch:'full'
      },
      {
        path:"review1",
        component:ReviewComponent
      },
      {
        path:"logo",
        component:LogoComponent1
      },
      {
        path:"directive",
        component:NgforComponentComponent
      },
      {
        path:'inbuiltpipe',
        component:InbuiltComponent
      },
      {
        path:'todo',
        component:TodoComponent
      },
      {
        path:'form',
        component:FormComponent,
        children:[
          {
            path:"",
            redirectTo:'template',
            pathMatch:'full'
          },
          {
          path:'template',
          component:TemplateComponent
        },
        {
          path:'reactive',
          component:ReactiveComponent
        }
      ]
      },
      {
        path:'service1',
        component:Useservice1Component
      },
      {
        path:'consume-remote',
        component:RemoteComponent
      },
      {
        path:'employee',
        component:RemoteEmployeeComponent
      },
      {
        path:'viewemployee/:empid',
        component:ViewEmployeeComponent
      },
      {
        path:'animate',
        component:AnimatetextComponent
      }

      
    ]) 
  ],
  providers: [],
  bootstrap: [RootComponent]
}
)
export class RootModule { }
