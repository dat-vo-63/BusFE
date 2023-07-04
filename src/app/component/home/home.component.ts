import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Bill } from 'src/app/model/bill';
import { Schedule } from 'src/app/model/schedule';
import { Seat } from 'src/app/model/seat';
import { Ticket } from 'src/app/model/ticket';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // model: NgbDateStruct
  listSchedule: Array<Schedule> = []
  departure?: Array<string>
  destination?: Array<string>
  public isCollapsed = true
  isClicked = false

  findScheduleForm: FormGroup = new FormGroup({
    startDate: new FormControl(""),
    departure: new FormControl(""),
    destination: new FormControl("")
  })

  myForm: FormGroup

  constructor(private router: Router, private calendar: NgbCalendar, private adminService: AdminService, private fb: FormBuilder) {
    // this.model = this.calendar.getToday()
    this.myForm = this.fb.group({
      seats: this.fb.array([])
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem("username") === null) {
      this.router.navigateByUrl("/login")
    }
  }

  getDepartureByStartDate(startDate: string){
    this.adminService.getAllDeparture(startDate).subscribe(res=>{
      this.departure = res
    })
  }

  getDestinationByStartDate(startDate: string){
    this.adminService.getAllDestination(startDate).subscribe(res=>{
      this.destination = res
    })
  }

  getDesAndDepByStartDate() {
    this.getDepartureByStartDate(`${this.findScheduleForm.value.startDate.year}/${this.findScheduleForm.value.startDate.month}/${this.findScheduleForm.value.startDate.day}`)
    this.getDestinationByStartDate(`${this.findScheduleForm.value.startDate.year}/${this.findScheduleForm.value.startDate.month}/${this.findScheduleForm.value.startDate.day}`)
  }

  getAllSchedule(){
    this.adminService.findScheduleBy(`${this.findScheduleForm.value.startDate.year}/${this.findScheduleForm.value.startDate.month}/${this.findScheduleForm.value.startDate.day}`, this.findScheduleForm.value.departure, this.findScheduleForm.value.destination).subscribe(res=>{
      this.listSchedule = res
      this.isClicked = true
    })
  }

  test() {
    console.log("changed")
  }

  onChange($event: any) {
    const seatList = <FormArray>this.myForm.controls['seats']

    if ($event.target.checked) {
      seatList.push(new FormControl($event.target.value))
    }
    else {
      let index = seatList.controls.findIndex(x => x.value == $event.target.value)
      seatList.removeAt(index)
    }
  }


}
