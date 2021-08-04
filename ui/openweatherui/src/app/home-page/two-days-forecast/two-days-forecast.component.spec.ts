import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDaysForecastComponent } from './two-days-forecast.component';

describe('TwoDaysForecastComponent', () => {
  let component: TwoDaysForecastComponent;
  let fixture: ComponentFixture<TwoDaysForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDaysForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
