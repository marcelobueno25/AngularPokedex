import { PipesModule } from './shared/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShellModule } from './shell/shell.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonModule,
    BrowserAnimationsModule,
    ShellModule,
    PipesModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
