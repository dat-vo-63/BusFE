import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = ""
  registerUrl = ""
  loginUrl = ""

  constructor() { }

  register(username: string, password: string, phoneNumber: string) { }
  login(username: string, password: string) { }
}
