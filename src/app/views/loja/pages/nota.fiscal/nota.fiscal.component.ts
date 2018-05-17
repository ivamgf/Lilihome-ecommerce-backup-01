import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota.fiscal',
  templateUrl: './nota.fiscal.component.html',
  styleUrls: ['./nota.fiscal.component.scss']
})
export class NotaFiscalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
