import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, delay, retry } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URLBASE: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAPI(url: string) {
    return this.http.get<any>(`${url}`);
  }

  getListaAll(page: number = 0, limit: number = 20): Observable<any> {
    return this.getAPI(
      `${this.URLBASE}/pokemon/?limit=${limit}&offset=${page}`
    ).pipe(
      mergeMap((response) => response.results),
      map((res: any, i: any) => {
        this.getDetalhePokemonLista(res.url).subscribe(
          (status) => (res.status = status)
        );
        return { conteudo: res, index: i };
      }),
      retry()
    );
  }

  getDetalhePokemonLista(url: string): Observable<any> {
    return this.getAPI(url).pipe(map((res) => res));
  }

  getDetalhePokemon(id: string): Observable<any> {
    return this.getAPI(`${this.URLBASE}/pokemon/${id}`);
  }

  getDetalhesAll(id: string): Observable<any> {
    let detalhe = this.getAPI(`${this.URLBASE}/pokemon/${id}`);
    let especie = this.getAPI(`${this.URLBASE}/pokemon-species/${id}`);
    return forkJoin({ detalhe, especie });
  }
}
