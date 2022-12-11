import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPageViewComponent } from './weather-page-view.component';

describe('WeatherPageViewComponent', () => {
  let component: WeatherPageViewComponent;
  let fixture: ComponentFixture<WeatherPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
