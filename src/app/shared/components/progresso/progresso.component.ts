import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss'],
})
export class ProgressoComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() total: number = 0;
  color: string = '';
  progressoInicial: number = 0;

  constructor() {}
  ngOnInit() {
    //if we don't have a total aka no requirement, it's 100%.
    this.progressoInicial = this.progress;
    if (this.total === 0) {
      this.total = this.progress;
    } else if (!this.total) {
      this.total = 100;
    }
    //if the progress is greater than the total, it's also 100%.
    if (this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.progress = (this.progress / this.total) * 100;
    if (this.progress < 55) {
      this.color = 'red';
    } else if (this.progress < 75) {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }
}
