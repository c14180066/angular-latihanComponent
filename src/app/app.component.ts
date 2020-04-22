import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private router : Router){}
  input(){
    this.router.navigate(['/input']);
  }
  list(){
    this.router.navigate(['/list']);
  }
  edit(){
    this.router.navigate(['edit']);
  }
  a = '';
  b = '';
  countArr = 0;
  arrNamaJur = [];
  arrDetailJur = [];
  submit(data1, data2){
    this.a = data1;
    this.b = data2;
    this.arrNamaJur.push(this.a);
    this.arrDetailJur.push(this.b);
    this.countArr = this.countArr + 1;
  }
}
