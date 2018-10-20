import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config'
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('createUser') createUserForm : NgForm;
  previewPhoto = false;
  gender:string = 'male';
  fullname:string;
  email:string;
  contactno:number;
  contactpreference:string;
  department:any;
  isActive:string;
  photoPath = 'assets/images/neeraj.png';
  dateOfBirth = new Date('01/01/2018 23:59:59');
  datepickerConfig : Partial<BsDatepickerConfig>;
  departments : Department[] = [
    { id : 1, name : 'Help Desk'},
    { id : 2, name : 'HR'},
    { id : 3, name : 'IT'},
    { id : 4, name : 'Payroll'}
  ];

  constructor( private empService: EmployeeService,private toastr: ToastrService) { 

    this.datepickerConfig = Object.assign({},
      {containerClass:'theme-dark-blue',showWeekNumbers:false,dateInputFormat:'YYYY-MM-DD'
    });
  }

  ngOnInit() {
  }
  togglePreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  createUserFun(createUser:NgForm){
    //console.log("UserObject:",this.createUserForm.value);
    this.empService.createUser(this.createUserForm.value).subscribe(
      (data)=> {
        console.log(JSON.stringify(data))
        if(data['message']=='success'){
          this.toastr.success('User register successfully', 'Anand Shukla!');
         
        }
      },
      (err)=> {console.log("error : ",err);
      this.toastr.error('Something wrong try sometime later', 'Error!');
      }
    );
  }
  onlyNumbers(e):boolean{
    const charcode = (e.which) ? e.which : e.keyCode;
    console.log(charcode);
    if(charcode > 31 && (charcode < 48 || charcode > 57)){
      return false;
    }
    return true;
  }

}
