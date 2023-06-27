import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:9090"
  registerUrl = "add-user"
  loginUrl = "login"

  constructor(private http: HttpClient) { }

  register(username: string, password: string, phoneNumber: string, email: string, address:string): Observable<string>{
    return this.http.post(`${this.baseUrl}/${this.registerUrl}`,{
      "userName":username,
      "email":email,
      "password":password,
      "phoneNumber":phoneNumber,
      "address":address,
      "userBalance":0,
      "role":"User"
    
    }, {responseType: 'text'})
  }
  login(email: string, password: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/${this.loginUrl}`,{
      "email":email,
      "password":password
    }, {responseType: 'text'})
  }
}
