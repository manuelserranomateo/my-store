import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; // Con esto obtenemos la direccion del path para extraer el Id

import { Product } from '../products'; 
import { CartService } from '../cart.service'; 
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductsService) { }

  product: Product | undefined;
  
  products!: Observable<Product[]>;
  productsArray: Product[] = []; 

  ngOnInit() { // Se ejecuta cada vez que se muestra el componente, se ejecuta SIEMPRE despues del constructor
    const routeParams = this.route.snapshot.paramMap; // La propiedad inyectada y obtiene los parametros
    const productIdFromRoute = Number(routeParams.get('productId')); // Devuelve el productId que pusimos en el html
    this.products = this.productService.getProducts();
    this.products.subscribe((valor) => { 
      this.productsArray = valor;     
      this.product = this.productsArray.find(product => product.id === productIdFromRoute);   
  })
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


}