import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      "id": 1,
      "name": "Astérix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 34.99,
      "image": "assets/figurine_asterix.jpg"
    },
    {
      "id": 2,
      "name": "Obélix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 37.99,
      "image": "assets/figurine_obelix.jpg"
    },
    {
      "id": 3,
      "name": "Idéfix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 25.99,
      "image": "assets/figurine_idefix.jpg"
    },

  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}