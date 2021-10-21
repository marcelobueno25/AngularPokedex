import { ComponentsModule } from './../shared/components/components.module';
import { ListaComponent } from './lista/lista.component';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { DetalheComponent } from './detalhe/detalhe.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PokemonComponent, ListaComponent, DetalheComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [PokemonComponent],
})
export class PokemonModule {}
