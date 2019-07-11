import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { RootComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ReviewComponent } from './shop/review/review.component';
import { ReviewTitleComponent } from './shop/review-title/review-title.component';
import { ReviewDescriptionComponent } from './shop/review-description/review-description.component';
import { ReviewImageComponent } from './shop/review-image/review-image.component';
import { ReviewAuthorComponent } from './shop/review-author/review-author.component';
import { NgforComponentComponent } from './directive/ngfor-component/ngfor-component.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { TodoComponent } from './myapp/todo/todo.component';
import { TemplateComponent } from "./forms/template/template.component";

@NgModule(
  {
  declarations: [ 
    RootComponent, 
    LogoComponent, 
    ReviewComponent, 
    ReviewTitleComponent, 
    ReviewDescriptionComponent, 
    ReviewImageComponent, 
    ReviewAuthorComponent, 
    NgforComponentComponent, 
    InbuiltComponent, 
    TodoComponent, 
    TemplateComponent 
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
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
        component:LogoComponent
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
        path:'template',
        component:TemplateComponent
      }
    ]) 
  ],
  providers: [],
  bootstrap: [RootComponent]
}
)
export class RootModule { }
