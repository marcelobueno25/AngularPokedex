import { PipesModule } from './../shared/pipes/pipes.module';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListaComponent } from './lista/lista.component';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { DetalheComponent } from './detalhe/detalhe.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../shared/services/data.service';
import { CardModule } from '../shared/components/cards/card.module';
import { ProgressoModule } from '../shared/components/progresso/progresso.module';

@NgModule({
  declarations: [PokemonComponent, ListaComponent, DetalheComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatIconModule,
    ChartsModule,
    PipesModule,
    CardModule,
    ProgressoModule,
  ],
  providers: [DataService],
  exports: [PokemonComponent],
})
export class PokemonModule {}
