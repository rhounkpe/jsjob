import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, limit = 20, end = '...', ...args: any[]): any {
    let shortenedValue = '';

    if (value) {
      const words = value.split(/\s+/);
      if (words.length > limit) {
        shortenedValue = words.slice(0, limit).join(' ') + end;
      } else {
        shortenedValue = value;
      }
    }

    return shortenedValue;
  }

}
