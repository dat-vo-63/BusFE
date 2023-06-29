import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent implements OnInit {

  changeProfileForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    phoneNumber: new FormControl("", [Validators.pattern("[0-9]*"), Validators.maxLength(12)]),
    address: new FormControl(""),
  })

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    if(localStorage.getItem("username")===null){
      this.router.navigateByUrl("/login")
    }
  }

  getControl(name: any): AbstractControl | null{
    return this.changeProfileForm.get(name)
  }

  

  changeProfile(){

  }
}