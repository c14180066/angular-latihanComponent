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

  constructor(public varglob : GlobalService) { 

  }
  submit(data1, data2){
    this.varglob.pushDataNamaJur(this.a);
    this.varglob.pushDataDetailJur(this.b);
  }

  ngOnInit() {
  }

}