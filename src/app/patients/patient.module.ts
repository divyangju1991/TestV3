export class Patient {

  constructor(private _id : number, private _name : string, private _dateOfBirth : Date, private _fees : number) {
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get dateOfBirth(){
    return this._dateOfBirth;
  }

  get fees(){
    return this._fees;
  }

}
