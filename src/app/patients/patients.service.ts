import { Injectable } from '@angular/core';
import { Patient } from './patient.module';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  getListOfPatients(){

    let patients : Patient[] = new Array();

    patients.push(new Patient(1, "Divu" , new Date(2020,8,28),  500));
    patients.push(new Patient(2, "Divu2", new Date(2020,7,6), 400 ));
    patients.push(new Patient(3, "Divu3", new Date(2020,5,20), 300 ));
    patients.push(new Patient(4, "Divu4", new Date(2020,1,29), 900 ));

    return patients;
  }

}
