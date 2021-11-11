import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposPipe } from './tipos/tipos.pipe';
import { HabitatPipe } from './habitat/habitat.pipe';

@NgModule({
  declarations: [TiposPipe, HabitatPipe],
  exports: [TiposPipe, HabitatPipe],
  imports: [CommonModule],
})
export class PipesModule {}
