import { provideRouter, RouterConfig } from '@angular/router';
import {AppComponent} from './app.component';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import {IntroComponent} from './components/intro/intro.component';
import {AboutComponent} from './components/about/about.component';
//import {LautaFormComponent} from './components/lauta-form/lauta-form.component';


export const AppRoutes = [
	{ path: ' ',   component: AppComponent },
  	{ path: 'about',    component: AboutComponent }
];