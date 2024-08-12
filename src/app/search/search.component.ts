import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input type="text" [(ngModel)]="searchText" (input)="onSearch()">
  `,
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  onSearch(): void {
    this.search.emit(this.searchText);
  }
}
