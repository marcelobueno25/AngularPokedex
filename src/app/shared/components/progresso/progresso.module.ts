import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressoComponent } from './progresso.component';

@NgModule({
  declarations: [ProgressoComponent],
  exports: [ProgressoComponent],
  imports: [CommonModule],
})
export class ProgressoModule {}
