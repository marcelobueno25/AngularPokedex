import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipos',
})
export class TiposPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'normal':
        return 'Normal';
      case 'fighting':
        return 'Lutador';
      case 'flying':
        return 'Voador';
      case 'poison':
        return 'Venenoso';
      case 'ground':
        return 'Terrestre';
      case 'rock':
        return 'Pedra';
      case 'bug':
        return 'Inseto';
      case 'ghost':
        return 'Fantasma';
      case 'steel':
        return 'Aço';
      case 'fire':
        return 'Fogo';
      case 'water':
        return 'Água';
      case 'grass':
        return 'Planta';
      case 'electric':
        return 'Elétrico';
      case 'psychic':
        return 'Psíquico';
      case 'ice':
        return 'Gelo';
      case 'dragon':
        return 'Dragão';
      case 'dark':
        return 'Sombrio';
      case 'fairy':
        return 'Fada';
      default:
        return 'Desconhecido';
    }
  }
}
