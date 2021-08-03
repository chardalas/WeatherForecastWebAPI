import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweatherloginComponent } from './openweatherlogin.component';

describe('OpenweatherloginComponent', () => {
  let component: OpenweatherloginComponent;
  let fixture: ComponentFixture<OpenweatherloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenweatherloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenweatherloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
