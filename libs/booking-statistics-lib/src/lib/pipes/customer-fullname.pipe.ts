import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '@trip-kaizen-sor-workspace/shared-lib';

@Pipe({
  name: 'customerFullname',
  pure: true
})
export class CustomerFullnamePipe implements PipeTransform {

  transform(customer: Customer): string {
    return `${customer.firstname} ${customer.lastname}`;
  }

}
