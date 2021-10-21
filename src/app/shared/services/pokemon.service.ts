import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getListaPokemon(page: number, limit: number): Observable<Array<any>> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`)
      .pipe(map((response: any) => response.results));
  }

  getDetalhePokemon(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getEspeciePokemon(id: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }
}
