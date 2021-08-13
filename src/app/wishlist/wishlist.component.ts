import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';
import { WishService } from '../service/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private register: UserService,
    private cart: CartService,
    private wish: WishService
  ) { }

  ngOnInit(): void {
  }

}
