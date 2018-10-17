import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://satendraclasses.com/public-api/restApi/api/user.php";
  constructor(private http: HttpClient) { }

  createUser(user: Employee): Observable<Employee> {
    console.log("service user: ",user);
    const body = JSON.stringify({
                      contactno: user['contactno'],
                      contactpreference: user['contactpreference'],
                      dateOfBirth: user['dateOfBirth'],
                      department: user['department'],
                      email: user['email'],
                      fullname: user['fullname'],
                      gender: user['gender'],
                      isActive: user['isActive'],
                      photoPath: user['photoPath']
                    });
                     // console.log("body:",body);
      //                 ,
          
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    return this.http.post<Employee>(this.url, body,{headers: headers});
} 
}
