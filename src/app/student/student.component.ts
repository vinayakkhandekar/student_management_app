import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { studentdata } from './student.model';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
showadd:boolean;
showupdate:boolean;
formValue;
studentmodelobj:studentdata=new studentdata;
allstudentdata;
  constructor(private  formBuilder:FormBuilder ,private api:ApiService) {
    this.formValue=this.formBuilder.group(
      {
        name:[],
        email:[],
        mobile:[],
        city:[],

      }
    )
   }

  ngOnInit() {
     this.getdata();
  }
  add()
  {
    this.showadd=true
    this.showupdate=false;
  }
  edit(data)
  {
    this.showadd=false
    this.showupdate=true;
    this.studentmodelobj.id=data.id;
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['email'].setValue(data.email)
    this.formValue.controls['mobile'].setValue(data.mobile)
    this.formValue.controls['city'].setValue(data.city)

  }
  addstudent()
  {
   
    this.studentmodelobj.name=this.formValue.value.name;
    this.studentmodelobj.email=this.formValue.value.email;
    this.studentmodelobj.mobile=this.formValue.value.mobile;
    this.studentmodelobj.city=this.formValue.value.city;
    this.api.poststudent(this.studentmodelobj).subscribe();
    
    this.formValue.reset();
    window.location.reload();
    
  }
  updat()
  {
    this.studentmodelobj.name=this.formValue.value.name;
    this.studentmodelobj.email=this.formValue.value.email;
    this.studentmodelobj.mobile=this.formValue.value.mobile;
    this.studentmodelobj.city=this.formValue.value.city;
    this.api.updatestudent(this.studentmodelobj.id,this.studentmodelobj).subscribe()
    this.formValue.reset();
    window.location.reload();
   
  }
  getdata()
  {
    this.api.getstudent().subscribe(res =>this.allstudentdata=res)
  }
  deletestudent(id)
  {
    this.api.deletestudent(id).subscribe()
    window.location.reload();
   
  }

}
