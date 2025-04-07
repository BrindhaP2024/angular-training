import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneMask' })
export class PhoneMaskPipe implements PipeTransform {
  transform(value: string): string {
    const visible: string = value.slice(-4);
    const masked: string = '*'.repeat(value.length - 4);
    return masked + visible;
  }
}
