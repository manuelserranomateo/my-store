import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
// El servicio es equivalente al Modelo en arquitectura MVC 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []; // Necesitamos darle el tipo para que no sea un array de "any" y si sea de Product
  // product: Product = new Product() Esto seria redundante

  constructor(private http: HttpClient) { }

  addToCart(product: Product) { this.items.push(product); }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items; }
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }
}
