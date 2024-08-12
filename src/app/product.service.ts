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
      "name": "Figurine Astérix",
      "description": "Retrouvez une figurine d'Astérix le Gaulois fabriquée en vinyle aux dimensions grandissimes !.",
      "price": 34.99,
      "image": "assets/figurine_asterix.jpg"
    },
    {
      "id": 2,
      "name": "Figurine Obélix",
      "description": "Découvrez une superbe figurine d’Obélix tenant Idéfix dans ses bras accompagnée d'un livre ! .",
      "price": 39.99,
      "image": "assets/figurine_obelix.jpg"
    },
    {
      "id": 3,
      "name": "Figurine Idéfix",
      "description": "Retrouvez une figurine d'Idéfix dans un format magistrale fabriquée en PVC, du haut de ces 30 cm",
      "price": 29.99,
      "image": "assets/figurine_idefix.jpg"
    },

  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}