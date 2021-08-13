import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private register: UserService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
  }

}
