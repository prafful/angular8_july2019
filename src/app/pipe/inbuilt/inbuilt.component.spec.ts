import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltComponent } from './inbuilt.component';

describe('InbuiltComponent', () => {
  let component: InbuiltComponent;
  let fixture: ComponentFixture<InbuiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
