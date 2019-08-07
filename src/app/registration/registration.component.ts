import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { PatientService } from './../shared/patient.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private patientService: PatientService, private router : Router) { }

  patientModel ={
    firstName: '',
    surname: '',
    dob: '',
    gender: '',
    maritial: '',
    email: '',
    mobile: '',
    phone: '',
    street: '',
    society: '',
    city: '',
    state: '',
    pin: '',
    nationality: '',
    Id: '',
    typeofPatient: '',
    noteforPatient: ''
  }
  serverErrorMessages: string;

  ngOnInit() {
  }
onSubmit(){
  this.patientService.postPatient(this.patientModel)
  .subscribe(
    res=>{
      this.router.navigateByUrl('/patientProfile')
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
}
}
