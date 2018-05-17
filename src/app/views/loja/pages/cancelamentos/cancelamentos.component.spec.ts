import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelamentosComponent } from './cancelamentos.component';

describe('CancelamentosComponent', () => {
  let component: CancelamentosComponent;
  let fixture: ComponentFixture<CancelamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
