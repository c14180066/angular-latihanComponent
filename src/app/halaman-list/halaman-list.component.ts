import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-halaman-list',
  templateUrl: './halaman-list.component.html',
  styleUrls: ['./halaman-list.component.css']
})
export class HalamanListComponent implements OnInit {

  arrTemp1 = [];

  constructor(public varglob : GlobalService) { 
    this.arrTemp1 = this.varglob.getDataJur();
  }

  ngOnInit() {

  }

}