import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }


  public getPokemon() : Observable<any> {
    return this.http.get(this.baseUrl + '/pokemon/?limit=20&offset=20').pipe(
        map((x: any) => {
          return x.results;
        })
      )
      ;
  }


}
