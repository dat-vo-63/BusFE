import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Bill } from 'src/app/model/bill';
import { GetInfo } from 'src/app/model/get-info';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-pay-screen',
  templateUrl: './pay-screen.component.html',
  styleUrls: ['./pay-screen.component.css']
})
export class PayScreenComponent implements OnInit {

  bill: GetInfo = new GetInfo(0, "", "", [], 0, "", "", "Paid", "Truong Huu Tai", "0949093726", "")
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.getBillById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
      this.bill = res
      console.log(this.bill)
    })
  }
}
