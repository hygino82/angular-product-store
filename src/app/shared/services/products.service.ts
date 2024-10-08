import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
  }
}
