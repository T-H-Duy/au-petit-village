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
      "price": 44.99,
      "image": "assets/figurine_asterix.jpg"
    },
    {
      "id": 2,
      "name": "Obélix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 46.99,
      "image": "assets/figurine_obelix.jpg"
    },
    {
      "id": 3,
      "name": "Idéfix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 40.99,
      "image": "assets/figurine_idefix.jpg"
    },
    {
      "id": 4,
      "name": "Assurancetourix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 12.99,
      "image": "assets/figurine_assurancetourix.jpg"
    },
    {
      "id": 5,
      "name": "Panoramix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 15.99,
      "image": "assets/figurine_panoramix.jpg"
    },
    {
      "id": 6,
      "name": "Falbala",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 14.99,
      "image": "assets/figurine_falbala.jpg"
    },
    {
      "id": 7,
      "name": "Cetautomatix",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 11.99,
      "image": "assets/figurine_cetautomatix.jpg"
    },
    {
      "id": 8,
      "name": "César",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": 17.99,
      "image": "assets/figurine_cesar.jpg"
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}