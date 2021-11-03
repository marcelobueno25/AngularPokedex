import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalhe } from 'src/app/shared/models/detalhe';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  pokemonID: string = '';
  detalhePokemon: any = {};

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      ticks: {
        display: false,
        suggestedMax: 150,
        suggestedMin: 0,
        stepSize: 25,
      },
    },
  };

  public radarChartLabels: Label[] = [
    'hp',
    'ataque',
    'defesa',
    'ataque-especial',
    'defesa-especial',
    'rapidez',
  ];
  public radarChartData: ChartDataSets[] = [{ data: [], label: 'Habilidades' }];
  public radarChartType: ChartType = 'radar';

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.router.params.subscribe((params) => (this.pokemonID = params['id']));
  }

  ngOnInit(): void {
    this.detalhe();
    this.teste();
  }

  teste() {
    this.pokemonService.getDetalhesAll(this.pokemonID).subscribe(
      (response) => {
        console.log('Pokemon - TESTE:', response);
        // this.detalhePokemon = response;
      },
      (err) => console.error('Erro: ', err),
      () => console.log('Detalhe Concluida')
    );
  }

  detalhe() {
    this.pokemonService.getDetalhesAll(this.pokemonID).subscribe(
      (response) => {
        console.log('Pokemon - Detalhe:', response);
        this.detalhePokemon = response;
        this.detalhePokemon.detalhe?.stats.map((ability: any) => {
          const valorHabilidade: number = ability.base_stat;

          // console.log('valorHabilidade: ', valorHabilidade);
          // console.log('nameHabilidade: ', nameHabilidade);

          this.radarChartData[0].data?.push(valorHabilidade);
        });

        console.log(
          'this.radarChartData[0].data?: ',
          this.radarChartData[0].data
        );
        console.log(' this.radarChartLabels: ', this.radarChartLabels);
      },
      (err) => console.error('Erro: ', err),
      () => console.log('Detalhe Concluida')
    );
  }
}
