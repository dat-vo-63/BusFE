import { Component, OnInit } from '@angular/core';
import { GetInfo } from 'src/app/model/get-info';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  listBill?: Array<GetInfo>

  ngOnInit(): void {
    this.adminService.getAllBill().subscribe(res=>{
      this.listBill = res
    })
  }

  constructor(private adminService: AdminService){}
}
