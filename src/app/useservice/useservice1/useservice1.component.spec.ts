import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Useservice1Component } from './useservice1.component';

describe('Useservice1Component', () => {
  let component: Useservice1Component;
  let fixture: ComponentFixture<Useservice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Useservice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Useservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
