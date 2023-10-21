import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUsers'
})
export class GetUsersPipe implements PipeTransform {

  transform(value: undefined): string[] {
    console.log(GetUsersPipe.name, this.transform.name, "called");
    return ["User 1", "User 2", "User 3"];
  }

}
