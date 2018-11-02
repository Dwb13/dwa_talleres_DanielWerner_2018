import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokegrid',
  templateUrl: './pokegrid.component.html',
  styleUrls: ['./pokegrid.component.scss'],
  providers: [ PokemonsService]
})
export class PokegridComponent implements OnInit {

  public listPokemon: Array<any>;
  public newPokemon: {
    "name": string,
    "number": number,
    "level": number,
    "type": string,
    "ability": string,
    "color": string
  };
  constructor(
    private pokemonService: PokemonsService,
    private router: Router,
    private route: ActivatedRoute

  ) { 


  }

  ngOnInit() {
    this.listPokemon = this.pokemonService.getPokemon();
  }

  deletePokemon(index: number){
    this.pokemonService.deletePokemon(index);
  }

  savePokemon(){
    if(this.newPokemon){
      this.pokemonService.addPokemon(this.newPokemon.name, this.newPokemon.number);
      this.newPokemon = null;
    }
  }

  specsPokemon(_id: number){
    this.router.navigate(['/specs/'+_id]);
  }


}
