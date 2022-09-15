import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string) {
    if (value.length == 11) {
      return (
        value.substring(0, 3) +
        '.' +
        value.substring(3, 6) +
        '.' +
        value.substring(3, 9) +
        '-' +
        value.substring(9)
      );
    } else {
      return 'Verifique o CPF informado.'
    }
  }

}
