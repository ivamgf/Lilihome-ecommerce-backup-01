import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalhe',
  templateUrl: './trabalhe.component.html',
  styleUrls: ['./trabalhe.component.scss']
})
export class TrabalheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
