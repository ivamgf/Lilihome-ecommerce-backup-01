import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistica.reversa',
  templateUrl: './logistica.reversa.component.html',
  styleUrls: ['./logistica.reversa.component.scss']
})
export class LogisticaReversaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
