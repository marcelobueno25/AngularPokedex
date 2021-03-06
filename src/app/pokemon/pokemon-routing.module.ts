import { DetalheComponent } from './detalhe/detalhe.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { ShellService } from '../shell/shell.service';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      component: PokemonComponent,
      children: [
        {
          path: '',
          component: ListaComponent,
        },
        {
          path: 'detalhe/:id',
          component: DetalheComponent,
        },
      ],
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
