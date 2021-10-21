import { List } from './../../shared/models/list';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  // pokemons: List[] = [];
  page: number = 0;
  limit: number = 24;
  detalhe_pokemon: any = {};

  pokemons: any = {
    pokemon: [],
    detalhe: [],
    especie: [],
  };

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pokemonService.getListaPokemon(this.page, this.limit).subscribe(
      (response) => {
        this.pokemons.pokemon = response;
      },
      (err) => console.error('Erro: ', err),
      () => {
        console.log('Lista Concluida');
        this.pokemons.pokemon.forEach((pokemon: any) => {
          console.log('Pokemon: ', pokemon.url.split('/')[6]);
          this.detalhe(pokemon.url.split('/')[6]);
        });
      }
    );
  }

  detalhe(id: string) {
    this.pokemonService.getEspeciePokemon(id).subscribe(
      (response) => {
        this.pokemons.detalhe.push(response);
        console.log(this.pokemons);
      },
      (err) => console.error('Erro: ', err),
      () => console.log('Lista Concluida')
    );
  }
}
