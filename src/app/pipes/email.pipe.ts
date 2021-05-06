import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, code: string): any {
    const res = value.split('@');
    return `${res[0]}@${code}.ibm.com`;
  }

}
