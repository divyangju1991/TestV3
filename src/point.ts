export class Point{

  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log("Point.x = "+this._x+", Point.y = "+this._y);
  }

  set x(num) {

    if(num<0){
      throw new Error("Number can not negative");
    }

    this._x = num;
  }

  get x() {
    return this._x;
  }

}
