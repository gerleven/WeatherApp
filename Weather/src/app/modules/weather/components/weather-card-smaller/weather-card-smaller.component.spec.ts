import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardSmallerComponent } from './weather-card-smaller.component';

describe('WeatherCardSmallerComponent', () => {
  let component: WeatherCardSmallerComponent;
  let fixture: ComponentFixture<WeatherCardSmallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardSmallerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardSmallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
