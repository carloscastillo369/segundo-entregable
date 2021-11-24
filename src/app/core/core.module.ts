import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { InitialContentComponent } from './home/components/initial-content/initial-content.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { ListMoviesComponent } from './home/components/list-movies/list-movies.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InitialContentComponent,
    CarouselComponent,
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class CoreModule { }
