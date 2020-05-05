import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-halaman-input',
  templateUrl: './halaman-input.component.html',
  styleUrls: ['./halaman-input.component.css']
})
export class HalamanInputComponent implements OnInit {

  a = '';
  b = '';
  data : any;

  constructor(public varglob : GlobalService) { 

  }
  submit(data1, data2){
    this.data ={
      nama : this.a,
      detail : this.b
    }
    this.varglob.pushDataJur(this.data);
  }

  ngOnInit() {
  }

}