import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellModule } from './shell/shell.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChartsModule } from 'ng2-charts';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ShellModule,
    FlexLayoutModule,
    ChartsModule,
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
