import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  selectedPatient: Patient ={
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
  };

  constructor(private http: HttpClient) { }



  postPatient(patient: Patient){
    return this.http.post(environment.apiBaseUrl+'/register',patient);
  }

  getPatientProfile() {
    return this.http.get(environment.apiBaseUrl + '/patientProfile');
  }


}


