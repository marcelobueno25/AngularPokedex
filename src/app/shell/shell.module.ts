import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
})
export class ShellModule {}
