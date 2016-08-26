import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'; 

@Component({
    moduleId:module.id,
    selector: 'intro',
    templateUrl: 'intro.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class IntroComponent { }
