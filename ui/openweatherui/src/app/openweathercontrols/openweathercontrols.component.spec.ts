import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweathercontrolsComponent } from './openweathercontrols.component';

describe('OpenweathercontrolsComponent', () => {
  let component: OpenweathercontrolsComponent;
  let fixture: ComponentFixture<OpenweathercontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenweathercontrolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenweathercontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
