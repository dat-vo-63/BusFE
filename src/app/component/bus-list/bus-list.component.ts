import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bus } from 'src/app/model/bus';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  page = 1
  pageSize: number = 5
  collectionSize = 1

  listBus?: Array<Bus>
  closeResult: string = ''
  addNewBusForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    seats: new FormControl(),
    departure: new FormControl(""),
    destination: new FormControl("")
  })

  editBusForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    seats: new FormControl(),
  })

  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllBus()
  }

  getAllBus() {
    this.adminService.getAllBus().subscribe(res => {
      this.listBus = res
      this.collectionSize = this.listBus.length / this.pageSize
    })
  }

  openForm(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  addNewBus() {
    this.adminService.addBus(this.addNewBusForm.value.name, this.addNewBusForm.value.seats).subscribe(res => {

      this.ngOnInit()
      return res
    })
    this.modalService.dismissAll()
  }

  editBusInfo() {
    this.adminService.editBus(this.editBusForm.value.name, this.editBusForm.value.seat).subscribe(res => {

    })
    this.modalService.dismissAll()
  }

  onDelete() {

  }

}
