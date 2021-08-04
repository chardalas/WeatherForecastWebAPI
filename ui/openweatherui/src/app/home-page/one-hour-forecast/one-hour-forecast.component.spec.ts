import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHourForecastComponent } from './one-hour-forecast.component';

describe('OneHourForecastComponent', () => {
  let component: OneHourForecastComponent;
  let fixture: ComponentFixture<OneHourForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneHourForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHourForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
