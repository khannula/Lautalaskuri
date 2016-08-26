import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
//import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {AboutComponent} from '../about/about.component';

@Component({
    moduleId:module.id,
    selector: 'navbar-top',
    templateUrl: 'navbar-top.component.html',
    directives: [ROUTER_DIRECTIVES]
    //directives: [ROUTER_DIRECTIVES, AboutComponent]
})

export class NavbarTopComponent { }