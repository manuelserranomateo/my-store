import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products'; // Importamos la Interfaz y la lista de productos
import { ActivatedRoute } from '@angular/router'; // Con esto obtenemos la direccion del path para extraer el Id
import { CartService } from '../cart.service'; // Usar Ctrl . sobre el error para importar automaticamente


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  // Es una inyeccion, en la que obtenemos la ruta, se ejecuta una sola vez

  product: Product | undefined; // Guardamos el producto, que puede ser tipo Product o estar indefinido
  // product!: Product; Es equivalente a la definicion anterior

  ngOnInit() { // Se ejecuta cada vez que se muestra el componente, se ejecuta SIEMPRE despues del constructor
    const routeParams = this.route.snapshot.paramMap; // La propiedad inyectada y obtiene los parametros
    const productIdFromRoute = Number(routeParams.get('productId')); // Devuelve el productId que pusimos en el html
    this.product = products.find(product => product.id === productIdFromRoute);// Al guardarlo aqui, usable HTML de Details

  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


}
