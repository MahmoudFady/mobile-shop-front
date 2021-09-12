import { ProductI } from './../../shared/models/product.model';
import { SearchService } from './../search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-resualt',
  templateUrl: './search-resualt.component.html',
  styleUrls: ['./search-resualt.component.css'],
})
export class SearchResualtComponent {
  products: ProductI[] = [];
  isSearchFired = false;
  constructor(private searchService: SearchService) {}
  ngOnInit() {
    this.searchService.getProducts().subscribe((products) => {
      this.products = products;
      this.isSearchFired = true;
    });
  }
}
