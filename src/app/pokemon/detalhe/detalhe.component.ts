import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalhe } from 'src/app/shared/models/detalhe';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  pokemonID: string = '';
  detalhePokemon: any = {};

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.router.params.subscribe((params) => (this.pokemonID = params['id']));
  }

  ngOnInit(): void {
    this.getParametro();
  }

  getParametro() {
    console.log('pokemonId: ', this.pokemonID);
    this.pokemonService.getDetalhePokemon(this.pokemonID).subscribe(
      (response) => {
        console.log(response);
        this.detalhePokemon = response;
      },
      (err) => console.error('Erro: ', err),
      () => console.log('Detalhe Concluida')
    );
  }
}
