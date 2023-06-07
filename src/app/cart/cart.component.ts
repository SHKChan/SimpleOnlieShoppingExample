import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  deliverInfo = { name: '', address: '' };

  constructor(
    private cartService: CartService
  ) { }

  onSubmit(
    deliveryForm: NgForm): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', deliveryForm.value.name, deliveryForm.value.address);
    deliveryForm.reset();
  }
}
