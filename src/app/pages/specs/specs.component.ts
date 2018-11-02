import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FeaturesService} from '../../services/features.service';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.scss'],
  providers: [FeaturesService]
})
export class SpecsComponent implements OnInit {
  public param: string;
  public specs: any;
  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _pokemons: FeaturesService
  ) { }
  
  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.param = params['ident'];
    });
    
    this.specs = this._pokemons.getFeatures(parseInt(this.param));
  }

  eliminarCaract(_index:number){
    this._pokemons.deleteFeature(_index);
  }


}
