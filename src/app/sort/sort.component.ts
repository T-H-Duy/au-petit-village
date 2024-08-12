import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="onSort('price', 'asc')">Prix Croissant</button>
    <button (click)="onSort('price', 'desc')">Prix Décroissant</button>
  `,
})

export class SortComponent {
  @Output() sort = new EventEmitter<{ field: string, direction: string }>();

  onSort(field: string, direction: string) {
    this.sort.emit({ field, direction });
  }
}
