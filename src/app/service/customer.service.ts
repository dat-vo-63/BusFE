import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = "http://localhost:9090"
  registerUrl = "add-user"
  loginUrl = "login"
  editProfileUrl = ""
  findUserByEmailUrl = "find-By-Email"
  updatePofileUrl = "update-user"

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

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/${this.loginUrl}`,{
      "email":email,
      "password":password
    })
  }

  findUserByEmail(email: string|null): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${this.findUserByEmailUrl}/${email}`)
  }

  updateProfile(username: string, email:string|null, password: string, phoneNumber: string, address: string): Observable<string>{
    return this.http.post(`${this.baseUrl}/${this.updatePofileUrl}`,{
      "userName": username,
      "email": email,
      "password": password,
      "phoneNumber": phoneNumber,
      "address": address
    }, {responseType:'text'})
  }
}
