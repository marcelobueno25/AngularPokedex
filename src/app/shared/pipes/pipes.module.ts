import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposPipe } from './tipos/tipos.pipe';
import { HabitatPipe } from './habitat/habitat.pipe';
import { FormatpesoPipe } from './formatpeso/formatpeso.pipe';

@NgModule({
  declarations: [TiposPipe, HabitatPipe, FormatpesoPipe],
  exports: [TiposPipe, HabitatPipe, FormatpesoPipe],
  imports: [CommonModule],
})
export class PipesModule {}
