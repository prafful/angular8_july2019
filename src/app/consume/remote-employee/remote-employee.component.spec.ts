import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteEmployeeComponent } from './remote-employee.component';

describe('RemoteEmployeeComponent', () => {
  let component: RemoteEmployeeComponent;
  let fixture: ComponentFixture<RemoteEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
