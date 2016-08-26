    import { Component } from '@angular/core';
    import { Lauta }    from './lauta';
//    import {LaskuriService} from '../../services/laskuri.service';
    import {ROUTER_DIRECTIVES} from '@angular/router';

    @Component({
      moduleId: module.id,
      selector: 'lauta-form',
      templateUrl: 'lauta-form.component.html',
      directives: [ROUTER_DIRECTIVES]
      //providers: [LaskuriService]
    })

    export class LautaFormComponent {

      leveydet = [4, 5, 6, 7, 8]; // leveys tuumaa
      pintaAla = 0;
      selectedLeveys = 4;
      menekki = 0; 
      model = new Lauta(1, 0, 0);

      submitted = false;
      onSubmit() { this.submitted = true; }
      active = true;
      
      laskeMenekki(model) {
        // valittu leveys mm. Muunna tuumat millimetreiksi.
        this.selectedLeveys = (model.leveys * 2.54)*10;

        // pinta-ala*1000/110*(1+10...20%)
        // Kaavassa hukkaprosentti 10% eli 1.1
        this.menekki = model.pintaala*1000/(this.selectedLeveys*(0.9));

        this.active = false;
        setTimeout(() => this.active = true, 0);
            //this.LaskuriService.laskeMenekki().then(heroes => this.heroes = heroes);
      }
    }