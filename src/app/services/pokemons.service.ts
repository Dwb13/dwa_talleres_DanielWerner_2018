import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService {

  public pokemon = [
    {
      "name": 'agumon',
      "number": 0,
      
    },
    {
      "name": 'greymon',
      "number": 1
    },
    {
      "name": 'gulimon',
      "number": 2
    },
    {
      "name": 'magnet',
      "number": 3
    },
    {
      "name": 'snorlax',
      "number": 4
    },
    {
      "name": 'marowak',
      "number": 5
    },
    {
      "name": 'pikachu',
      "number": 6
    },
    {
      "name": 'eve',
      "number": 7
    },
    {
      "name": 'charizard',
      "number": 8
    },
    {
      "name": 'meowth',
      "number": 9
    }

  ]
  constructor() { }

  addPokemon(name: string, number: number){
    let newPokemon = {
      "name": name,
      "number": number
    }
    this.pokemon.push(newPokemon);
    return this.getPokemon();
  }

  getPokemon() {
    return this.pokemon;
  }

  deletePokemon(_i:number) {
    this.pokemon.splice(_i, 1);
    return this.getPokemon();
  }


}
