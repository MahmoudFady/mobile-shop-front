import { ProductI } from './../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly urlBase = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) {}
  getProductsByCategory(category: string) {
    return this.http.get<{ message: string; products: ProductI[] }>(
      this.urlBase + 'category/' + category
    );
  }
  getProductById(productId: string) {
    return this.http.get<{ message: string; product: ProductI }>(
      this.urlBase + productId
    );
  }
}
