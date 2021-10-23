import { ShellService } from './shell/shell.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // ShellService.childRoutes([
  //   {
  //     path: 'pokemon',
  //     loadChildren: () =>
  //       import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  //   },
  // ]),
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: '**',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
