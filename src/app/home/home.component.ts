
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';
import { SortPipe } from '../sort.pipe';
import { SearchPipe } from '../search.pipe';
import { SortComponent } from '../sort/sort.component';
import { SearchComponent } from '../search/search.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SortPipe, SearchPipe, SearchComponent, SortComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchText: string = '';
  sortField: string = '';
  sortDirection: string = '';

  handleSort(sortEvent: { field: string, direction: string }) {
    this.sortField = sortEvent.field;
    this.sortDirection = sortEvent.direction;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
