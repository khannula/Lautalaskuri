import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import {AboutComponent} from './components/about/about.component';
import {IntroComponent} from './components/intro/intro.component';
import {LautaFormComponent} from './components/lauta-form/lauta-form.component'
import { AppRoutes }  from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule,
  				  RouterModule.forRoot(AppRoutes) ],
  declarations: [ AppComponent, 
	  				NavbarTopComponent, 
	  				AboutComponent, 
	  				IntroComponent, 
	  				LautaFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }