import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavbarTopComponent} from './components/navbar-top/navbar-top.component';
import {AboutComponent} from './components/about/about.component';
import {IntroComponent} from './components/intro/intro.component';
import {LautaFormComponent} from './components/lauta-form/lauta-form.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES]
  //providers: [LaskuriService]
})
export class AppComponent { }