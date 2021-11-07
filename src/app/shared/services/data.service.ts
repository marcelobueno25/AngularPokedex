import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Observable string sources
  private temaSource = new Subject<boolean>();
  // Observable string streams
  tema$ = this.temaSource.asObservable();

  constructor() {}

  getTema(tema: boolean) {
    this.temaSource.next(tema);
  }
  setTema(tema: boolean) {
    this.temaSource.next(tema);
  }

  // getTema() {
  //   return this.tema;
  // }

  // setTema(tema: boolean) {
  //   this.tema = tema;
  // }

  // getImg2d() {
  //   this.emitirCursoCriado.emit(this.tema);
  // }
}
