import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss'],
})
export class CardSimpleComponent implements OnInit {
  @Input() id: any;
  @Input() name: any;
  @Input() imagePokemon: any;
  @Input() bgcolor: any;
  @Input() imageGif: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
