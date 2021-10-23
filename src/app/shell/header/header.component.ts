import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(event: MatSlideToggleChange) {
    this.isDarkTheme = event.checked;
    console.log('Toggle fired', this.isDarkTheme);
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle('dark-theme-mode');
  }
}
