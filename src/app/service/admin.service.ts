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

  findAllBus(): Observable<Array<Bus>>{
    return this.http.get<Array<Bus>>(`${this.baseUrl}/${this.findAllBusUrl}`,{

    })
  }
}
