import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalhe } from 'src/app/shared/models/detalhe';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  pokemonID: string = '';
  detalhePokemon: any = {};

  public radarChartData: ChartDataSets[] = [{ data: [], label: 'Habilidades' }];
  public radarChartType: ChartType = 'radar';
  public radarChartLabels: Label[] = [
    'hp',
    'ataque',
    'defesa',
    'ataque-especial',
    'defesa-especial',
    'rapidez',
  ];
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(3, 169, 244, 0.3)',
      borderColor: 'rgba(3, 169, 244, 0.5)',
      pointBackgroundColor: 'rgba(3, 169, 244, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(255, 152, 0, 1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
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
          this.radarChartData[0].data?.push(valorHabilidade);
        });
      },
      (err) => console.error('Erro: ', err),
      () => console.log('Detalhe Concluida')
    );
  }
}
