import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatpeso',
})
export class FormatpesoPipe implements PipeTransform {
  transform(value: string): string {
    value = value.toString();
    const beforeDot = value.substring(0, value.length - 1);
    const afterDot = value.substring(value.length - 1, value.length);
    value = beforeDot + '.' + afterDot;
    return value;
  }
}
