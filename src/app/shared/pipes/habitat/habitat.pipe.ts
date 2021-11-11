import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habitat',
})
export class HabitatPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'grassland':
        return 'Grama';
      case 'forest':
        return 'Floresta';
      case 'waters-edge':
        return 'Lagos e Rios (Agua Doce)';
      case 'sea':
        return 'Mar (Agua Salgada)';
      case 'cave':
        return 'Caverna';
      case 'mountain':
        return 'Montanha';
      case 'rough':
        return 'Campo';
      case 'urban':
        return 'Meio Urbano (Cidade)';
      case 'rare':
        return 'Raro';
      default:
        return 'Desconhecido';
    }
  }
}
