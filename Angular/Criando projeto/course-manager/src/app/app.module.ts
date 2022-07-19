import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course/courselist.component';
import { starComponent } from './star/star.componet';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/Error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',redirectTo:'courses',pathMatch:'full'
      },
      {
        path:'courses',component:CourseListComponent
      },
      {
        path:'**',component:Error404Component
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
