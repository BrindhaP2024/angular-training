import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .split(' ')
      .map((a, b) => {
        if (b === 0) {
          return a.toLowerCase();
        }
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
      })
      .join('');
  }
}
