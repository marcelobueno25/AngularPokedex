import { List } from './../../shared/models/list';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  // pokemons: List[] = [];
  loading: boolean = true;
  pageIndex: number = 0;
  pageSize: number = 20;

  limit: number = 20;
  length: number = 240;

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pokemonService.getListaPokemon(this.pageIndex, this.limit).subscribe(
      (response) => {
        this.pokemons = response;
        console.log('Listar: ', this.pokemons);
        // this.pokemons.push({
        //   id: response.url.split('/')[6],
        //   name: response.name,
        //   imagem: `https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/${
        //     response.url.split('/')[6]
        //   }.png`,
        // });
      },
      (err) => console.error('Erro: ', err),
      () => {
        console.log('Detalhe Concluida', this.pokemons);
        this.loading = false;
      }
    );
  }

  pageEvents(event: any) {
    // if (event.previousPageIndex > event.pageIndex) {
    // } else {
    // }
    // this.pageIndex = event.pageIndex * event.pageSize;
    // this.pageSize = this.pageIndex + event.pageSize;

    this.pageIndex = event.pageIndex;
    this.pageSize += event.pageSize;
    this.length = event.length;
    console.log(' this.event ', event);
    console.log(' this.pageIndex ', this.pageIndex);
    console.log(' this.pageSize ', this.pageSize);
    this.listar();
    return event;
    this.listar();
  }
}
