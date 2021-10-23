import { Route, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';

export class ShellService {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
    };
  }
}
