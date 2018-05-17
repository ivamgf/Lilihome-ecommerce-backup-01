import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'widget-change-qty',
  templateUrl: './change-qty.component.html',
  styleUrls: ['./change-qty.component.scss']
})
export class ChangeQtyWidget implements OnInit {

  qty: number;
  @Input() max: number;
  @Input() actualQty: number;
  @Output() newQty = new EventEmitter();

  constructor() { }
  ngOnInit() { this.qty = this.isValid(this.actualQty) ? this.actualQty : 1; }


  isValid = (num) => (num !== undefined && num !== null && num > 0);

  minus() {
    if (this.qty > 1) {
      this.qty -= 1;
      this.returnUpdatedValue();
    };
  }

  plus() {
    if (this.qty < this.max) {
      this.qty += 1;
      this.returnUpdatedValue();
    };
  }

  returnUpdatedValue = () => this.newQty
    .emit( this.isValid(this.qty) ? this.qty.toString() : '1' );
}
