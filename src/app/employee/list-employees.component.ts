import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees : Employee[] = [
    {
      id : 1,
      name : 'Anand Shukla',
      gender : 'Male',
      contactPreference : 'Email',
      email : 'anand.knp@gmail.com',
      dateOfBirth : new Date('03/10/1981'),
      department : 'IT',
      isActive : true,
      phoneNumber : 9876543212,
      photoPath : 'assets/images/anand.png'
    },
    {
      id : 1,
      name : 'Anand Shukla',
      gender : 'Male',
      contactPreference : 'Email',
      email : 'anand.knp@gmail.com',
      dateOfBirth : new Date('03/10/1981'),
      department : 'IT',
      isActive : true,
      phoneNumber : 9876543212,
      photoPath : 'assets/images/anand.png'
    },
    {
      id : 1,
      name : 'Anand Shukla',
      gender : 'Male',
      contactPreference : 'Email',
      email : 'anand.knp@gmail.com',
      dateOfBirth : new Date('03/10/1981'),
      department : 'IT',
      isActive : true,
      phoneNumber : 9876543212,
      photoPath : 'assets/images/anand.png'
    },
    {
      id : 1,
      name : 'Anand Shukla',
      gender : 'Male',
      contactPreference : 'Email',
      email : 'anand.knp@gmail.com',
      dateOfBirth : new Date('03/10/1981'),
      department : 'IT',
      isActive : true,
      phoneNumber : 9876543212,
      photoPath : 'assets/images/anand.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
