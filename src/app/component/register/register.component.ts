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
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(12)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", [Validators.required])
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

  addNewCustomer(): any {
    this.customerService.register(this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.phoneNumber, this.registerForm.value.email, this.registerForm.value.address).subscribe(res => {
      return res
    })
  }
}
