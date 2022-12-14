import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardBiggerComponent } from './weather-card-bigger.component';

describe('WeatherCardBiggerComponent', () => {
  let component: WeatherCardBiggerComponent;
  let fixture: ComponentFixture<WeatherCardBiggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardBiggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardBiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
