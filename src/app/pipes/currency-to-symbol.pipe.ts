import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyToSymbol'
})
export class CurrencyToSymbolPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    switch (value.toLowerCase()) {
      case 'euros':
        return '€';
        break;
      case 'pounds':
        return '£';
        break;
      case 'cfa':
        return 'CFA';
        break;
      case 'CAD':
        return '$';
        break;
      default:
        return value;
    }
  }

}
