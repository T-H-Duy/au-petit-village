import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(items: any[], field: string, direction: string): any[] {
    if (!items) return [];
    if (!field || !direction) return items;

    let sortedItems = items.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });

    if (direction === 'desc') {
      sortedItems = sortedItems.reverse();
    }

    return sortedItems;
  }
}