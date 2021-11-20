import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalhe } from 'src/app/shared/models/detalhe';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label, Color, ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {
  // Configutacao do CharJs
  public radarChartData: ChartDataSets[] = [{ data: [] }];
  public radarChartType: ChartType = 'radar';
  public radarChartLabels: Label[] = [
    'HP',
    'Ataque',
    'Defesa',
    'SuperAtaque',
    'SuperDefesa',
    'Rapidez',
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
        suggestedMax: 200,
        suggestedMin: 0,
        stepSize: 25,
        fontColor: 'rgba(170,170,170,1)',
      },
      gridLines: { color: 'rgba(170,170,170,0.5)' },
    },
  };
  type: 'danger' | 'warning' | 'info' | 'success' = 'info';

  loading: boolean = true;
  pokemonID: string = '';
  detalhePokemon: any = {};

  pokemonDetalhe: any = {
    id: '',
    nome: '',
    nomeJP: '',
    images: '',
    geracao: '',
    cor: '',
    tipo: '',
    habitat: '',
    largura: '',
    altura: '',
    habilidades: '',
    experiencia: '',
    taxaCaptura: '',
    atributos: {},
  };

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.router.params.subscribe((params) => (this.pokemonID = params['id']));
  }

  ngOnInit(): void {
    this.detalhe();
  }

  colorRadar(): void {
    let value = this.detalhePokemon.especie?.capture_rate;
    let type: 'danger' | 'warning' | 'info' | 'success';
    if (value < 100) {
      type = 'danger';
    } else if (value < 150) {
      type = 'warning';
    } else if (value < 200) {
      type = 'info';
    } else {
      type = 'success';
    }
    this.type = type;
  }

  detalhe() {
    this.pokemonService.getDetalhesAll(this.pokemonID).subscribe(
      (response) => {
        this.atualizarDados(response);
        response.detalhe?.stats.map((atributo: any) => {
          // console.log('atributo: ', atributo);
          const valorHabilidade: number = atributo.base_stat;
          this.radarChartData[0].data?.push(valorHabilidade);
        });
      },
      (err) => console.error('Ocorreu um Erro na requisição', err),
      () => {
        this.colorRadar();
        this.loading = false;
        console.log('Detalhe Concluida');
      }
    );
  }

  atualizarDados(pokemon: any) {
    this.detalhePokemon = pokemon;
    this.pokemonDetalhe = {
      id: pokemon?.detalhe?.id,
      nome: pokemon?.detalhe?.name,
      nomeJP: pokemon?.especie?.names[9].name,
      images: pokemon?.detalhe?.sprites?.front_default,
      geracao: pokemon?.especie?.generation.url.split('/')[6],
      cor: pokemon?.especie?.color.name,
      tipo: pokemon?.detalhe?.types,
      habitat: pokemon?.especie?.habitat?.name,
      Peso: pokemon?.detalhe?.weight,
      altura: pokemon?.detalhe?.height,
      habilidades: pokemon?.detalhe?.abilities,
      experiencia: pokemon?.detalhe?.base_experience,
      taxaCaptura: pokemon?.especie?.capture_rate,
      atributos: {
        hp: pokemon?.detalhe.stats[0].base_stat,
        attack: pokemon?.detalhe.stats[1].base_stat,
        defense: pokemon?.detalhe.stats[2].base_stat,
        specialAttack: pokemon?.detalhe.stats[3].base_stat,
        specialDefense: pokemon?.detalhe.stats[4].base_stat,
        speed: pokemon?.detalhe.stats[5].base_stat,
      },
    };
  }
}
