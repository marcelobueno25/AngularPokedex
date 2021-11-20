import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Observable string sources
  private temaSource = new Subject<boolean>();
  private pageSource = new Subject<number>();
  // Observable string streams
  tema$ = this.temaSource.asObservable();
  page$ = this.pageSource.asObservable();

  constructor() {}

  setTema(tema: boolean) {
    this.temaSource.next(tema);
  }

  getPage() {
    return this.page$;
  }

  setPage(page: number) {
    this.pageSource.next(page);
  }
}
