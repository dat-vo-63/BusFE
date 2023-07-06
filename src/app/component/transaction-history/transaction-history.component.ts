import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetInfo } from 'src/app/model/get-info';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent{
  listBill?: Array<GetInfo>
  searchBillForm: FormGroup = new FormGroup({
    billId: new FormControl(),

  })
  ngOnInit(): void {
    this.customerService.getAllBillByEmail(localStorage.getItem("email")).subscribe(res=>{
      this.listBill = res
    })
  }

  constructor(private customerService: CustomerService){}

  searchBill(){
    
  }

  searchBillByDate(){
    
  }
}
