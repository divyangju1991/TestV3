import { Component, OnInit } from '@angular/core';
import {PatientsService} from './patients.service';
import {Patient} from './patient.module';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientId : number = 1247;
  _patientName : string = "";
  pts : string = "List Of Patients";
  colspan1 : number = 2;
  isActive : boolean = true;
  emailId : string = "test@gmail.com";
  ptList : Patient[] = new Array();
  //constructor(private _patientName : string) { }
  //It will give compile time error

  getPatientName(){
    return this._patientName;
  }

  ngOnInit(): void {
    this._patientName = "Divyang";
  }

  constructor(service : PatientsService) {
    this.ptList = service.getListOfPatients();
  }

  onSave(value){
    console.log("Entered Value : "+ value);
  }

  onClicked(value){
    console.log("Button presed value : "+ value);
  }

  onTextEvent($event){
    if($event.keyCode === 13)
      console.log("entered value by event = "+$event.target.value);
  }

  onDivClicked(){
    console.log("Div is clicked");
  }

  onBtnClicked(){
    console.log("Button is clicked");
  }

  onDivClicked_V2($event){
    console.log("Div2 is clicked");
  }

  onBtnClicked_V2($event){
    $event.stopPropagation();
    console.log("Button2 is clicked");
  }

  onTestTwoBinding(){
    console.log("email obj value : "+this.emailId);
  }

}
