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
  loading: boolean = true;
  pokemonlimite: number = 20;
  paginatorTotal: number = 500;
  paginatorItem: number = Number(localStorage.getItem('page')) ?? 0;
  paginatorAtual: number = this.paginatorItem * this.pokemonlimite;

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pokemonService
      .getListaAll(this.paginatorAtual, this.pokemonlimite)
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
  }

  pageEvents(event: any) {
    this.paginatorItem = event.pageIndex;
    this.paginatorAtual = this.paginatorItem * this.pokemonlimite;
    localStorage.setItem('page', this.paginatorItem.toString());
    console.log(' this.event ', event, this.paginatorItem);
    return event;
  }
}
