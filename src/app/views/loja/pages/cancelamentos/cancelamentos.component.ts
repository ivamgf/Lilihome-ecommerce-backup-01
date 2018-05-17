import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelamentos',
  templateUrl: './cancelamentos.component.html',
  styleUrls: ['./cancelamentos.component.scss']
})
export class CancelamentosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
