import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './../shared/components/components.module';
import { ListaComponent } from './lista/lista.component';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { DetalheComponent } from './detalhe/detalhe.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PokemonComponent, ListaComponent, DetalheComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatSliderModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    ChartsModule,
  ],
  exports: [PokemonComponent],
})
export class PokemonModule {}
