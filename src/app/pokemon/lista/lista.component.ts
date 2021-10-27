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
  loading: boolean = true;

  pokemonlimite: number = 20;
  paginatorTotal: number = 500;
  paginatorItem: number = 0;

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pokemonService
      .getListaAll(this.paginatorItem, this.pokemonlimite)
      .subscribe(
        (response: any) => {
          // this.paginatorTotal = response.count;
          response.results.forEach((pokemon: any) => {
            // console.log('response: ', pokemon);
            this.pokemons.push(pokemon);
          });
        },
        (err) => console.error('Erro: ', err),
        () => {
          console.log('Detalhe Concluida', this.pokemons);
          this.loading = false;
        }
      );
    // this.pokemonService.getListaPokemon(this.pageIndex, this.limit).subscribe(
    //   (response: any) => {
    //     console.log('Listar: ', response);
    //     this.paginatorTotal = response.count;
    //     response.results.forEach((pokemon: any) => {
    //       this.pokemonService
    //         .getDetalhePokemon(pokemon.name)
    //         .subscribe((detalhePokemon) => {
    //           this.pokemons.push(detalhePokemon);
    //         });
    //     });
    //   },
    //   (err) => console.error('Erro: ', err),
    //   () => {
    //     console.log('Detalhe Concluida', this.pokemons);
    //     this.loading = false;
    //   }
    // );
  }

  pageEvents(event: any) {
    // if (event.previousPageIndex > event.pageIndex) {
    // } else {
    // }
    // this.pageIndex = event.pageIndex * event.pageSize;
    // this.pageSize = this.pageIndex + event.pageSize;
    this.paginatorItem = event.pageIndex * event.pageSize;
    console.log(' this.event ', event);
    // console.log(' this.pageIndex ', this.pageIndex);
    // console.log(' this.pageSize ', this.pageSize);
    return event;
  }
}
