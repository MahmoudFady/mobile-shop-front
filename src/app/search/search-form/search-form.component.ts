import { SearchService } from './../search.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  constructor(private searchService: SearchService) {}
  search(f: NgForm) {
    const { category, brand } = f.value;
    this.searchService.search(category, brand);
  }
}
