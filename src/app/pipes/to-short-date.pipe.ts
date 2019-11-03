import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShortDate'
})
export class ToShortDatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(value);
    if (value.toLowerCase() === 'asap') {
      return 'dès que possible';
    } else if (value.indexOf('-') > -1) {
      let fullDate;
      let rest;
      [fullDate, rest] = value.toLowerCase().split('t');

      let year;
      let month;
      let date;

      [year, month, date] = fullDate.split('-');

      return `${date}/${month}/${year}`;
    } else {
      return '--';
    }
  }

}
