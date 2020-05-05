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
  arrTemp2 = [];
  constructor(public varglob : GlobalService) {
      this.arrTemp1 = this.varglob.getDataNamaJur();
      this.arrTemp2 = this.varglob.getDataDetailJur();
   }

  edit(){
    for (var i = 0;i < this.arrTemp1.length; i++){
      if (this.arrTemp1[i] == this.a){
          this.arrTemp2[i] = this.b;
      }
    }
    this.varglob.setDataNamaJur(this.arrTemp1);
    this.varglob.setDataDetailJur(this.arrTemp2);
  }

  ngOnInit() {
  }

}