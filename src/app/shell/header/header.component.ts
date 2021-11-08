import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService],
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor() {
    // dadosService.tema$.subscribe((tema) => {
    //   console.log('Tema: ', tema);
    //   this.isDarkTheme = tema;
    // });
  }

  ngOnInit(): void {
    // this.isDarkTheme = localStorage.getItem('theme') == 'Dark' ? true : false;
    // this.isDarkTheme = true;
    // var teste = this.dados.tema;
    // var teste2 = this.dados.getTema();
    this.getTema();
  }

  // Consulta no LocalStorage o Tema
  getTema(): string {
    let localTema = localStorage.getItem('tema') ?? 'Claro';
    this.isDarkTheme = localTema == 'Escuro' ? true : false;
    let temaAtual = this.isDarkTheme ? 'Escuro' : 'Claro';
    this.setTema(temaAtual);
    return localTema;
  }

  updateTema() {
    let temaAtual = this.isDarkTheme ? 'Escuro' : 'Claro';
    localStorage.setItem('tema', temaAtual);
    this.setTema(temaAtual);
  }

  setTema(tema: string) {
    let body = document.getElementsByTagName('body')[0];
    if (tema == 'Escuro') {
      body.classList.add('tema-escuro');
    } else {
      body.classList.remove('tema-escuro');
    }
  }

  // alterarImagem(event: MatSlideToggleChange) {
  //   this.is3d = event.checked;
  // }

  // guardarTema() {
  //   localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'Light');
  // }
}
