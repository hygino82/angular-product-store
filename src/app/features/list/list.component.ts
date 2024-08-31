import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: any[] = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products) => {
      this.products = products;
    });
  }
}
