import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Schedule } from 'src/app/model/schedule';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  model: NgbDateStruct
  listSchedule?: Array<Schedule>
  public isCollapsed = true

  findScheduleForm: FormGroup = new FormGroup({
    startDate: new FormControl(""),
    departure: new FormControl(""),
    destination: new FormControl("")
  })

  myForm: FormGroup

  ticketBookingForm: FormGroup = new FormGroup({
    // seats: new FormControl(Array)
  })

  constructor(private router: Router, private calendar: NgbCalendar, private adminService: AdminService, private fb: FormBuilder){
    this.model = this.calendar.getToday()
    this.myForm = this.fb.group({
      seats: this.fb.array([])
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("username")===null){
      this.router.navigateByUrl("/login")
    }
  }

  getAllScheduleByStartDate(){
    this.adminService.showScheduleByDate(`${this.findScheduleForm.value.startDate.year}/${this.findScheduleForm.value.startDate.month}/${this.findScheduleForm.value.startDate.day}`).subscribe(res=>{
      this.listSchedule = res

    })
  }

  test(){
    this.adminService.addTicket(this.myForm.value.seats).subscribe(res=>{
      return res
    })
  }

  onChange($event: any){
    const seatList = <FormArray>this.myForm.controls['seats']

    if($event.target.checked){
      seatList.push(new FormControl($event.target.value))
    }
    else{
      let index = seatList.controls.findIndex(x=>x.value == $event.target.value)
      seatList.removeAt(index)
    }
  }


}
