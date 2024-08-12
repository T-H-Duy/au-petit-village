import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(products => {
      this.product = products.find(p => p.id === Number(productId));
    });
  }
  goBack(): void {
    this.location.back();
  }
}