import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweatherviewComponent } from './openweatherview.component';

describe('OpenweatherviewComponent', () => {
  let component: OpenweatherviewComponent;
  let fixture: ComponentFixture<OpenweatherviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenweatherviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenweatherviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
