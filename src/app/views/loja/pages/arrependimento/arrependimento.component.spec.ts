import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrependimentoComponent } from './arrependimento.component';

describe('ArrependimentoComponent', () => {
  let component: ArrependimentoComponent;
  let fixture: ComponentFixture<ArrependimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrependimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrependimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
