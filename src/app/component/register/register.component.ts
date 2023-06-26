import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    phoneNumber: new FormControl()
  })
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }

  registerFn() {

  }

  addNewCustomer() {

  }
}
