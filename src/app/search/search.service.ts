import { Subject, Observable } from 'rxjs';
import { ProductI } from './../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly urlBase = 'http://localhost:3000/';
  result = new Subject<ProductI[]>();
  constructor(private http: HttpClient) {}
  search(category: string, brand: string) {
    const url = this.urlBase + 'product/search/' + category + '/' + brand;
    this.http
      .get<{ message: string; products: ProductI[] }>(url)
      .subscribe((response) => {
        console.log(response);

        this.result.next(response.products);
      });
  }
  getProducts(): Observable<ProductI[]> {
    return this.result.asObservable();
  }
}
