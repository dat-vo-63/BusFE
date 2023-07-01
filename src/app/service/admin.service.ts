import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
import { Bus } from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = "http://localhost:9090"
  addScheduleUrl = "add/schedule"
  findAllBusUrl = "findAllBus"
  addBusUrl = "add"
  updatePofileUrl = "update-user"
  getAllScheduleUrl = ""

  constructor(private http: HttpClient) { }

  addschedule(startTime: string, endTime: string, totalSeat: number, seatLeft: number, startDate: string, busId: number): Observable<Schedule> {
    return this.http.post<Schedule>(`${this.baseUrl}/${this.addScheduleUrl}`, {
      "startTime": startTime,
      "endTime": endTime,
      "totalSeat": totalSeat,
      "seatLeft": seatLeft,
      "startDate": startDate,
      "bus": {
        "busId": busId
      }
    })
  }

  getAllBus(): Observable<Array<Bus>> {
    return this.http.get<Array<Bus>>(`${this.baseUrl}/${this.findAllBusUrl}`, {

    })
  }

  getAllSchedule() {
    return this.http.get<Array<Schedule>>(`${this.baseUrl}/${this.getAllScheduleUrl}`)
  }

  addBus(name: string, seat: number, fromLocate: string, toLocate: string): Observable<Bus> {
    return this.http.post<Bus>(`${this.baseUrl}/${this.addBusUrl}`, {
      "name": name,
      "seat": seat,
      "fromLocate": fromLocate,
      "toLocate": toLocate
    })
  }

  editBus() {

  }
}
