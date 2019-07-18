import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatetextComponent } from './animatetext.component';

describe('AnimatetextComponent', () => {
  let component: AnimatetextComponent;
  let fixture: ComponentFixture<AnimatetextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatetextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
