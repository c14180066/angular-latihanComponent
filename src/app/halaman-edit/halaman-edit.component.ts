import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-halaman-edit',
  templateUrl: './halaman-edit.component.html',
  styleUrls: ['./halaman-edit.component.css']
})
export class HalamanEditComponent implements OnInit {

  a = '';
  b = '';
  arrTemp1 = [];
  constructor(public varglob : GlobalService) {
      this.arrTemp1 = this.varglob.getDataJur();
   }

  edit(){
    for (var i = 0;i < this.arrTemp1.length; i++){
      if (this.arrTemp1[i].nama == this.a){
        this.arrTemp1[i].detail = this.b;
      }
    }
    this.varglob.setDataJur(this.arrTemp1);
  }

  ngOnInit() {
  }

}