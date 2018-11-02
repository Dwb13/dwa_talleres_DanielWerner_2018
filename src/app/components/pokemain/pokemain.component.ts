import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../services/features.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemain',
  templateUrl: './pokemain.component.html',
  styleUrls: ['./pokemain.component.scss'],
  providers: [ FeaturesService ] 
})

export class PokemainComponent implements OnInit {

  public feature_list: Array<any>;
  public feature_a_guardar: string;
  
  constructor(  
    private _featuresService: FeaturesService,
    
  ){
  
  }

  ngOnInit() {
  }

  agregarCarac() {
    if(this.feature_a_guardar) {
      this._featuresService.addFeature(this.feature_a_guardar);
      this.feature_a_guardar = null;
    }
  }

  eliminarCaract(_index) {
    this._featuresService.deleteFeature(_index);
  }

}
