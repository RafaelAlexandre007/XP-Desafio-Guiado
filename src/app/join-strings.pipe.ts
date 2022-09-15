import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinStrings',
  pure: false
})
export class JoinStringsPipe implements PipeTransform {

  transform(array: string[], separator: string) {
    return array.join(separator);
  }

}
