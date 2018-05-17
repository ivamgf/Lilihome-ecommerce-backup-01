import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeQtyComponent } from './change-qty.component';

describe('ChangeQtyComponent', () => {
  let component: ChangeQtyComponent;
  let fixture: ComponentFixture<ChangeQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
