import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { first } from 'rxjs/operators';

import {  UserService } from '../service';
import { MustMatch } from '../must-match.validator';
//import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.scss']
})
export class RegistercomponentComponent implements OnInit {
  [x: string]: any;
 
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private register: UserService
  ) { }

  ngOnInit() {
    
  }
  
  condition=true;
  show="show";

  done(){
    if(this.reactiveform.valid){
      console.log(this.reactiveform.valid)
      this.register.poster(this.reactiveform.value).subscribe(
        ()=>{
          this.router.navigate(['/login']);
        })
    }
  }
  
  reactiveform:FormGroup = this.formbuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],    
    gender: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  get first() {
    return this.reactiveform.get('firstname')
  }
  get second() {
    return this.reactiveform.get('lastname')
  }
  get third() {
    return this.reactiveform.get('username')
  }
  get fourth() {
    return this.reactiveform.get('password')
  }
  get fifth() {
    return this.reactiveform.get('confirmPassword')
  }
  get gender() {
    return this.reactiveform.get('gender')
  }

  val = "visibility_off"
  icon(inp:any){
    if(this.val=="visibility_off"){
      this.val="visibility"
      inp.type="text"
    }else{
      this.val="visibility_off"
      inp.type="password"
    }
  }

}
