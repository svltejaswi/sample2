import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresscomponentComponent } from './addresscomponent.component';

describe('AddresscomponentComponent', () => {
  let component: AddresscomponentComponent;
  let fixture: ComponentFixture<AddresscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
