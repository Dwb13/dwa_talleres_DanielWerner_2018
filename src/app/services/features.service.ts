import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
@Injectable()
export class FeaturesService {

    public caracteristicas = [

        {
            "name": 'agumon',
            "numbr": 1, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'fuego', 
            "nickname": 'Dragon', 
            "color": 'yellow'
        },
        {
            "name": 'greymon',
            "numbr": 2, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'orange'
        },
        {
            "name": 'gulimon',
            "numbr": 3, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'black'
        },
        {
            "name": 'magnet',
            "numbr": 4, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'blue'
        },
        {
            "name": 'snorlax',
            "numbr": 5, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'red'
        },
        {
            "name": 'marowak',
            "numbr": 6, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'green'
        },
        {
            "name": 'pikachu',
            "numbr": 7, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'purple'
        },
        {
            "name": 'eve',
            "numbr": 8, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'grey'
        },
        {
            "name": 'charizard',
            "numbr": 9, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'white'
        },
        {
            "name": 'meowth',
            "numbr": 10, 
            "level": 10, 
            "type": 'Fire', 
            "ability": 'Kamehameha', 
            "nickname": 'Dragoncito', 
            "color": 'brown'
        },
    ]; 

    constructor(
        private _location: Location
    ){}
    
    addFeature(_nameFeature:any) {
        this.caracteristicas.push(_nameFeature);
        return this._location.back();
    }

    deleteFeature(_i:number) {
        this.caracteristicas.splice(_i, 1);
        return this._location.back();
    }

    getFeatures(_index: number) {
        return this.caracteristicas[_index];
    }

    

}
//danielwernerberrio@gmail.com
//DanArion1996