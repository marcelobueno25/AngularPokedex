import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Cards
import { CardSimpleComponent } from './card-simple/card-simple.component';
import { CardComponent } from './card.component';
import { CardTituloComponent } from './card-titulo/card-titulo.component';
import { CardConteudoComponent } from './card-conteudo/card-conteudo.component';

@NgModule({
  declarations: [
    CardSimpleComponent,
    CardComponent,
    CardTituloComponent,
    CardConteudoComponent,
  ],
  exports: [
    CardSimpleComponent,
    CardComponent,
    CardTituloComponent,
    CardConteudoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class CardModule {}
