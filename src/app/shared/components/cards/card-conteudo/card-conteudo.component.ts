import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.scss'],
})
export class CardConteudoComponent implements OnInit {
  @Input() titulo = '';
  @Input() conteudo = '';

  constructor() {}

  ngOnInit(): void {}
}
