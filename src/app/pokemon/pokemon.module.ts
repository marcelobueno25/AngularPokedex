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
  ],
  exports: [PokemonComponent],
})
export class PokemonModule {}
