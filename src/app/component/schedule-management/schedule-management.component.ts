import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Schedule } from 'src/app/model/schedule';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.css']
})
export class ScheduleManagementComponent implements OnInit {
  schedule?: Array<Schedule>
  closeResult: string = ''
  model: NgbDateStruct

  createSchedule: FormGroup = new FormGroup({
    startTime: new FormControl(),
    endTime: new FormControl(""),
    totalSeat: new FormControl(""),
    seatLeft: new FormControl(""),
    startDate: new FormControl("")
  })

  constructor(private adminService: AdminService, private modalService: NgbModal, private calendar: NgbCalendar) {
    this.model = this.calendar.getToday()
  }

  ngOnInit(): void {
    this.getAllSchedule()
  }

  getAllSchedule() {
    this.adminService.getAllSchedule().subscribe(res => {
      this.schedule = res
    })
  }

  openForm(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addNewSchedule() {
  }

  change() {
    console.log(`${this.createSchedule.value.startTime.day.toString()}/${this.createSchedule.value.startTime.month.toString()}/${this.createSchedule.value.startTime.year.toString()}`)
  }
}
