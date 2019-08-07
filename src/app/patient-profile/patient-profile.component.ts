import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
 patientDetails;
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.patientService.getPatientProfile().subscribe(
      res => {
        this.patientDetails = res['patient'];
      },
      err => {
        console.log(err)
      }
    )
  }

}
