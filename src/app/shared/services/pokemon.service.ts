import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, delay, retry } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URLBASE: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getAPI(url: string) {
    return this.http.get<any>(`${url}`);
  }

  getListaPokemon(page: number = 0, limit: number = 20): Observable<any> {
    return this.getAPI(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`
    ).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getListaAll(page: number = 0, limit: number = 20): Observable<any> {
    return this.getAPI(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`
    ).pipe(
      mergeMap((response) => response.results),
      map((res: any, i: any) => {
        this.getDetalhePokemonLista(res.url).subscribe(
          (status) => (res.status = status)
        );
        return { conteudo: res, index: i };
      }),
      delay(500),
      retry()
    );
  }

  getDetalhePokemonLista(url: string): Observable<any> {
    return this.getAPI(url).pipe(map((res) => res));
  }

  getDetalhePokemon(id: string): Observable<any> {
    return this.getAPI(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getEspeciePokemon(id: string): Observable<any> {
    return this.getAPI(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
  getTipoPokemon(id: string): Observable<any> {
    return this.getAPI(`https://pokeapi.co/api/v2/type/${id}`);
  }

  getDetalhesAll(id: string): Observable<any> {
    let detalhe = this.getAPI(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let especie = this.getAPI(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return forkJoin({ detalhe, especie });
  }
}
