import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CountriesService } from './shared/services/countries-services';
import { ThemainComponent } from './themain/themain.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: "countries", component: MainComponent },
  { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  }

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    ThemainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
