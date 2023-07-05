import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
import { Bus } from '../model/bus';
import { Ticket } from '../model/ticket';
import { Seat } from '../model/seat';
import { Bill } from '../model/bill';
import { GetInfo } from '../model/get-info';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = "http://localhost:9090"
  addScheduleUrl = "add/schedule"
  findAllBusUrl = "findAllBus"
  addBusUrl = "add"
  updatePofileUrl = "update-user"
  getAllScheduleUrl = "find-all-schedule"
  showScheduleByDateUrl = "get-schedule-start-date"
  addTicketUrl = "add-ticket"
  getDepartureByStartDateUrl = "get-departure"
  getDestinationByStartDateUrl = "get-destinations"
  findScheduleByUrl = "find-schedule-start-time-depart-des"
  seatBookedUrl = "find-seat-booked-by-schedule"
  addBillUrl = "addBill"
  findBillByIdUrl = "get-detail-bill"
  getSeatSortedUrl = "list-seat-by-Schedule"
  getAllBillUrl = "find-Bill"
  countDownUrl = "count-down"

  constructor(private http: HttpClient) { }

  addschedule(startTime: string, endTime: string, startDate: string, departure: string, destination: string, busId: number): Observable<Schedule> {
    return this.http.post<Schedule>(`${this.baseUrl}/${this.addScheduleUrl}`, {
      "startTime": startTime,
      "endTime": endTime,
      "startDate": startDate,
      "departure": departure,
      "destinations": destination,
      "bus": {
        "busId": busId
      }
    })
  }

  getAllBus(): Observable<Array<Bus>> {
    return this.http.get<Array<Bus>>(`${this.baseUrl}/${this.findAllBusUrl}`, {

    })
  }

  getAllSchedule(): Observable<Array<Schedule>> {
    return this.http.get<Array<Schedule>>(`${this.baseUrl}/${this.getAllScheduleUrl}`, {

    })
  }

  addBus(name: string, seat: number): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.addBusUrl}`, {
      "name": name,
      "seat": seat,
    }, { responseType: 'text' })
  }

  showScheduleByDate(startDate: string): Observable<Array<Schedule>> {
    return this.http.put<Array<Schedule>>(`${this.baseUrl}/${this.showScheduleByDateUrl}`, {
      "startDate": startDate
    })
  }

  addTicket(seats: Array<Number>): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.addTicketUrl}`, {
      seats
    }, { responseType: 'text' })
  }

  getAllDeparture(startDate: string): Observable<Array<string>> {
    return this.http.put<Array<string>>(`${this.baseUrl}/${this.getDepartureByStartDateUrl}`, {
      "startDate": startDate
    })
  }

  getAllDestination(startDate: string): Observable<Array<string>> {
    return this.http.put<Array<string>>(`${this.baseUrl}/${this.getDestinationByStartDateUrl}`, {
      "startDate": startDate
    })
  }

  findScheduleBy(startDate: string, departure: string, destination: string): Observable<Array<Schedule>> {
    return this.http.put<Array<Schedule>>(`${this.baseUrl}/${this.findScheduleByUrl}`, {
      "startDate": startDate,
      "departure": departure,
      "destinations": destination
    })
  }

  seatBooked(scheduleId: number): Observable<Array<number>> {
    return this.http.put<Array<number>>(`${this.baseUrl}/${this.seatBookedUrl}`, {
      "scheduleId": scheduleId
    })
  }

  addBill(ticketId: number, phoneNumber: string | null): Observable<Bill> {
    return this.http.post<Bill>(`${this.baseUrl}/${this.addBillUrl}`, {
      "ticketId": ticketId,
      "phoneNumber": phoneNumber
    })
  }

  getBillById(billId: number): Observable<GetInfo> {
    return this.http.get<GetInfo>(`${this.baseUrl}/${this.findBillByIdUrl}/${billId}`)
  }

  getSeatByScheduleId(scheduleId: number): Observable<Array<Seat>>{
    return this.http.put<Array<Seat>>(`${this.baseUrl}/${this.getSeatSortedUrl}`,{
      "scheduleId": scheduleId
    })
  }

  getAllBill(): Observable<Array<GetInfo>>{
    return this.http.get<Array<GetInfo>>(`${this.baseUrl}/${this.getAllBillUrl}`,{
    })
  }

  countDown(billId: number): Observable<string>{
    return this.http.post(`${this.baseUrl}/${this.countDownUrl}`,{
      "billId": billId
    }, {responseType : 'text'})
  }
}