import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$: Observable<any[]>;
  filterPokemonArr$: Observable<any[]>;
  txt = '';

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon$ = this.pokeService.getPokemon();
    this.filterPokemonArr$ = this.pokemon$;
  }

  filter() : void {
    this.filterPokemonArr$ = this.pokemon$.pipe
    (
      map(
        (x: any) => {
          console.log('jip');
        return x.filter(y => y.name.toLowerCase().indexOf(this.txt.toLowerCase()) !== -1);
      })
    );
  }


}

