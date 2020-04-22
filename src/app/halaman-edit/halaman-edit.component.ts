import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halaman-edit',
  templateUrl: './halaman-edit.component.html',
  styleUrls: ['./halaman-edit.component.css']
})
export class HalamanEditComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  }

}