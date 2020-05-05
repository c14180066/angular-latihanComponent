import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-halaman-edit',
  templateUrl: './halaman-edit.component.html',
  styleUrls: ['./halaman-edit.component.css']
})
export class HalamanEditComponent implements OnInit {

  a = ' ';

  constructor(public varglob : GlobalService) { }

  edit(data1){
    

  }

  ngOnInit() {
  }

}