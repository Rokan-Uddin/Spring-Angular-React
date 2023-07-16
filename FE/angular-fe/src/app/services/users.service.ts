import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Injectable } from '@angular/core';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
 @Injectable() 
export class UserService {
    private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
    constructor (
        private http: HttpClient
    ) {}
    getUsers():Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.usersUrl)
    }
    getUser(id:number):Observable<UserModel> {
        return this.http.get<UserModel>(`${this.usersUrl}/${id}`)
    }
}